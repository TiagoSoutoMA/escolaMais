import React, { useState } from 'react';
import {  FaEyeSlash } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import RegisterStyle from './Register.module.css';



const Register = () => {
  const [formData, setFormData] = useState({
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
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
              value={formData.nome}
              onChange={handleChange}
              placeholder="Ex: Maria"
              required
            />
          </label>
          <label className={RegisterStyle.registerLabel}>
          <div className={RegisterStyle.nome}>
            Sobrenome:
            </div>
            <input className={RegisterStyle.registerInput}
              type="text"
              name="sobrenome"
              value={formData.sobrenome}
              onChange={handleChange}
              placeholder="Ex: Eduarda"
              required
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
              value={formData.cpf}
              onChange={handleChange}
              placeholder="Ex: XXX.XXX.XXX-XX"
              required
            />
          </label>
          <label className={RegisterStyle.registerLabel}>
          <div className={RegisterStyle.nome}>
            E-mail:
            </div>
            <input className={RegisterStyle.registerInput}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              value={formData.confirmarEmail}
              onChange={handleChange}
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
              value={formData.nomeEscola}
              onChange={handleChange}
              placeholder="Ex: CEM - Centro Educacional Moderno" 
              required
            />
          </label>
           <label className={RegisterStyle.registerLabel}>
           <div className={RegisterStyle.nome}>
            Senha:
            </div>
            <div className={RegisterStyle.passwordInput}>
              <input className={RegisterStyle.registerInput}
                type={showPassword ? 'text' : 'password'}
                name="senha"
                value={formData.senha}
                onChange={handleChange}
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
              value={formData.confirmarSenha}
              onChange={handleChange}
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
            <input  className={RegisterStyle.registerInput}
              type="text"
              name="cargo"
              value={formData.cargo}
              onChange={handleChange}
              placeholder="Ex: CEO"
              required
            />
          </label>
          <label className={RegisterStyle.registerLabel}>
          <div className={RegisterStyle.nome}>
            Endereço:
            </div>
            <input  className={RegisterStyle.registerInput}
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              placeholder="Ex: Rua almirante barroso"
              required
            />
          </label>    
          <label className={RegisterStyle.registerLabel}>
          <div className={RegisterStyle.nome}>
            Número:
            </div>
            <input  className={RegisterStyle.registerInput}
              type="text"
              name="numero"
              value={formData.numero}
              onChange={handleChange}
              placeholder="Ex: 190"
              required
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
              value={formData.cep}
              onChange={handleChange}
              placeholder="Ex: 12345-123"
              required
            />
          </label>
          <label className={RegisterStyle.registerLabel}>
          <div className={RegisterStyle.nome}>
            CNPJ:
            </div>
            <input  className={RegisterStyle.registerInput}
              type="text"
              name="cnpj"
              value={formData.cnpj}
              onChange={handleChange}
              placeholder="Ex: 12.426.486 - 000156"
              required
            />
          </label>
          <label className={RegisterStyle.registerLabel}>
          <div className={RegisterStyle.nome}>
            Escolha seu Plano:
            </div>
           
            <select className={RegisterStyle.registerInput}
              name="plano"
              value={formData.plano}
              onChange={handleChange}
              required
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
                checked={formData.sexo === 'masculino'}
                onChange={() => handleSexoChange('masculino')}
              />
              Masculino
            </label>
            <label className={RegisterStyle.radiogroupLabel}>
              <input className={RegisterStyle.radiogroupInput}
                type="radio"
                name="sexo"
                value="feminino"
                checked={formData.sexo === 'feminino'}
                onChange={() => handleSexoChange('feminino')}
              />
              Feminino
            </label>
            <label className={RegisterStyle.radiogroupLabel}>
              <input className={RegisterStyle.radiogroupInput}
                type="radio"
                name="sexo"
                value="outro"
                checked={formData.sexo === 'outro'}
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