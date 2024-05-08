import React, { useState } from 'react';
import {  FaEyeSlash } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import RegisterStyle from './Register.module.css';

function cadastrarUsuario(dadosUsuario) {
  const url = 'http://localhost:8080/users/create';

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dadosUsuario)
  };

  fetch(url, requestOptions)
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error('Erro ao cadastrar usuário');
      }
      return response.json();
    })
    .then(data => {
      console.log('Usuário cadastrado com sucesso:', data);
    })
    .catch(error => {
      console.error('Erro ao cadastrar usuário:', error);
    });
}

const Register = () => {
  /*const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    cpf: '',
    email: '',
    confirmarEmail: '',
    nomeEscola: '',
    senha: '',
    confirmarSenha: '',
    cargo: '',
    endereco: '',
    numero: '',
    cep: '',
    cnpj: '',
    sexo: '',
    plano: ''
  });*/

  const [email, setEmail] = useState();
  const [confirmarEmail, setConfirmarEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmarSenha, setConfirmarSenha] = useState();
  const [role, setRole] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email !== confirmarEmail) {
      alert('Os campos de email não correspondem');
      return;
    }

    if (password !== confirmarSenha) {
      alert('Os campos de senha não correspondem');
      return;
    }

    if(!role) {
      alert('Defina um cargo');
    } 

    const dadosUsuario = {
      email,
      password,
      role
    }

    cadastrarUsuario(dadosUsuario);

    setEmail('');
    setConfirmarEmail('');
    setPassword('');
    setConfirmarSenha('');
    setRole('');
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSexoChange = (value) => {
    setFormData({ ...formData, sexo: value });
  };

  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (

    <div className={RegisterStyle.registerBody}>  
      <h2 className={RegisterStyle.registerH2}>Cadastro</h2>
      <form onSubmit={handleSubmit}>     
        <div className={RegisterStyle.registerInputGroupOne}>
          <label className={RegisterStyle.registerLabel}>
            <div className={RegisterStyle.nome}>
            Nome:
            </div>
            <input className={RegisterStyle.registerInput}
              type="text"
              name="nome"
              /*value={formData.nome}
              onChange={handleChange}
              required*/
              placeholder="Ex: Maria"
            />
          </label>
          <label className={RegisterStyle.registerLabel}>
            <div className={RegisterStyle.nome}>
              Sobrenome:
            </div>
            <input className={RegisterStyle.registerInput}
              type="text"
              name="sobrenome"
              /*value={formData.sobrenome}
              onChange={handleChange}
              required*/
              placeholder="Ex: Eduarda"
            />
          </label>
        </div>
        <div className={RegisterStyle.registerInputGroup}>
          <label className={RegisterStyle.registerLabel}>
            <div className={RegisterStyle.nome}>
              CPF:
            </div>
            <input className={RegisterStyle.registerInput}
              type="text"
              name="cpf"
              /*value={formData.cpf}
              onChange={handleChange}
              required*/
              placeholder="Ex: XXX.XXX.XXX-XX"
            />
          </label>
          <label className={RegisterStyle.registerLabel}>
            <div className={RegisterStyle.nome}>
              E-mail:
            </div>
            <input className={RegisterStyle.registerInput}
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ex: Maria@gmail.com"
              required
            />
          </label> 
          <label className={RegisterStyle.registerLabel}>
            <div className={RegisterStyle.nome}>
              Confirmar E-mail:
            </div>
            <input className={RegisterStyle.registerInput}
              type="email"
              name="confirmarEmail"
              value={confirmarEmail}
              onChange={(e) => setConfirmarEmail(e.target.value)}
              placeholder="Ex: Maria@gmail.com"
              required
            />
          </label>
        </div>
        <div className={RegisterStyle.registerInputGroup}>
          <label className={RegisterStyle.registerLabel}>
            <div className={RegisterStyle.nome}>
              Nome da Escola:
            </div>
            <input className={RegisterStyle.registerInput}
              type="text"
              name="nomeEscola"
              /*value={formData.nomeEscola}
              onChange={handleChange}
              required*/
              placeholder="Ex: CEM - Centro Educacional Moderno"
            />
          </label>
          <label className={RegisterStyle.registerLabel}>
            <div className={RegisterStyle.nome}>
              Senha:
            </div>
            <div className={RegisterStyle.passwordInput}>
              <input className={RegisterStyle.registerInput}
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className={RegisterStyle.passwordToggle}
              >
                {showPassword ? <MdOutlineRemoveRedEye /> : <FaEyeSlash />}
              </button>
            </div>
          </label>
          <label className={RegisterStyle.registerLabel}>
            <div className={RegisterStyle.nome}>
              Confirmar Senha:
            </div>
            <div className={RegisterStyle.passwordInput2}>
              <input className={RegisterStyle.registerInput}
                type={showPassword2 ? 'text' : 'password'}
                name="confirmarSenha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                required
              />
              <button 
                type="button"
                onClick={togglePasswordVisibility2}
                className={RegisterStyle.passwordToggle2}
              >
                {showPassword2 ?  <MdOutlineRemoveRedEye />: <FaEyeSlash />}
              </button>
            </div>
          </label>
        </div>
        <div className={RegisterStyle.registerInputGroup}>
          <label className={RegisterStyle.registerLabel}>
            <div className={RegisterStyle.nome}>
              Cargo:
            </div>
            <select className={RegisterStyle.registerInput}
                name="cargo"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
            >                
              <option className={RegisterStyle.plano}>Selecione...</option>
              <option className={RegisterStyle.plano} value="ROLE_ADMIN">Administrador</option>
              <option className={RegisterStyle.plano} value="ROLE_TEACHER">Professor</option>
              <option className={RegisterStyle.plano} value="ROLE_COORDINATOR">Coordenador</option>  
              <option className={RegisterStyle.plano} value="ROLE_LEGAL_RESPONSIBLE">Responsável</option>           
            </select>
          </label>
          <label className={RegisterStyle.registerLabel}>
            <div className={RegisterStyle.nome}>
              Endereço:
            </div>
            <input  className={RegisterStyle.registerInput}
              type="text"
              name="endereco"
              /*value={formData.endereco}
              onChange={handleChange}
              required*/
              placeholder="Ex: Rua almirante barroso"
            />
          </label>    
          <label className={RegisterStyle.registerLabel}>
            <div className={RegisterStyle.nome}>
              Número:
            </div>
            <input  className={RegisterStyle.registerInput}
              type="text"
              name="numero"
              /*value={formData.numero}
              onChange={handleChange}
              required*/
              placeholder="Ex: 190"
            />
          </label>
        </div>
        <div className={RegisterStyle.registerInputGroup}>
          <label className={RegisterStyle.registerLabel}>
            <div className={RegisterStyle.nome}>
              CEP:
            </div>
            <input  className={RegisterStyle.registerInput}
              type="text"
              name="cep"
              /*value={formData.cep}
              onChange={handleChange}
              required*/
              placeholder="Ex: 12345-123"
            />
          </label>
          <label className={RegisterStyle.registerLabel}>
            <div className={RegisterStyle.nome}>
              CNPJ:
            </div>
            <input  className={RegisterStyle.registerInput}
              type="text"
              name="cnpj"
              /*value={formData.cnpj}
              onChange={handleChange}
              required*/
              placeholder="Ex: 12.426.486 - 000156"
            />
          </label>
          <label className={RegisterStyle.registerLabel}>
            <div className={RegisterStyle.nome}>
              Escolha seu Plano:
            </div>
            <select className={RegisterStyle.registerInput}
              name="plano"
              /*value={formData.plano}
              onChange={handleChange}
              required*/
            >                
              <option className={RegisterStyle.plano}>Selecione...</option>
              <option className={RegisterStyle.plano}>Plano 1</option>
              <option className={RegisterStyle.plano}>Plano 2</option>
              <option className={RegisterStyle.plano}>Plano 3</option>             
            </select>
          </label>
          </div>
        <div className={RegisterStyle.registerInputGroup}>       
          <div  className={RegisterStyle.radioGroup}>
            <label className={RegisterStyle.labelSexo}>Sexo:</label>
              <label className={RegisterStyle.radiogroupLabel}>
                <input className={RegisterStyle.radiogroupInput}
                  type="radio"
                  name="sexo"
                  value="masculino"
                  /*checked={formData.sexo === 'masculino'}*/
                  onChange={() => handleSexoChange('masculino')}
                />
                Masculino
              </label>
              <label className={RegisterStyle.radiogroupLabel}>
                <input className={RegisterStyle.radiogroupInput}
                  type="radio"
                  name="sexo"
                  value="feminino"
                  /*checked={formData.sexo === 'feminino'}*/
                  onChange={() => handleSexoChange('feminino')}
                />
                Feminino
              </label>
              <label className={RegisterStyle.radiogroupLabel}>
                <input className={RegisterStyle.radiogroupInput}
                  type="radio"
                  name="sexo"
                  value="outro"
                  /*checked={formData.sexo === 'outro'}*/
                  onChange={() => handleSexoChange('outro')}
                />
                Outro
            </label>
          </div>
        </div>
      
        <button type="submit" className={RegisterStyle.registerBotao}>Cadastrar</button>      
      </form>
    </div>   
  );
};

export default Register;