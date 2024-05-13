import React, { useState } from 'react';
import UsersStyle from './Users.module.css'
import Header from '../navbar/header/Header'

const Users = () => {

  const [section, setSection] = useState('search');

  const [userData, setUserData] = useState({
    name: '',
    class: '',
    cpf: '',
    cargo: '',
    dataAdmissao: '',
    estadoCivil: '',
    genero: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    endereco: '',
    numero: '',
    bairro: '',
    salario: '',
    tipoContrato: ''
  });

  const toggleSection = (sectionName) => {
    setSection(sectionName);
  };

  const handleUserDataChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleUserSubmit = () => {
    console.log('Dados do usuário a serem cadastrados:', userData);
    setUserData({
      name: '',
      class: '',
      cpf: '',
      cargo: '',
      dataAdmissao: '',
      estadoCivil: '',
      genero: '',
      email: '',
      telefone: '',
      dataNascimento: '',
      endereco: '',
      numero: '',
      bairro: '',
      salario: '',
      tipoContrato: ''
    });
  };

  return (

    <>
    <Header/>
    <div>
      <div >
      <h2 className={UsersStyle.UsersTitle}>Usuários</h2>
        <button className={UsersStyle.UsersBotao1} onClick={() => toggleSection('search')}>Pesquisar Usuário</button>
        <button className={UsersStyle.UsersBotao2} onClick={() => toggleSection('add')}>Cadastrar Usuário</button>
      </div>

      {section === 'search' && (
        <>
        <div className={UsersStyle.Search}>
        <h2 className={UsersStyle.SearchTitle}>
          Pesquisar usuarios
        </h2>
          <label className={UsersStyle.SearchLabel1}>
            <a>Tipo </a>
            <select className={UsersStyle.SearchSelect1}>
              <option value="type1">Tipo 1</option>
              <option value="type2">Tipo 2</option>
            </select>
          </label>
          <label className={UsersStyle.SearchLabel1}>
            <a>Buscar por </a>
            <select className={UsersStyle.SearchSelect1}>
              <option value="name">Nome</option>
              <option value="class">Turma</option>
            </select>
          </label>
          <label className={UsersStyle.SearchLabel1}>
            <a>Nome </a>
            <input className={UsersStyle.SearchInput} type="text" name="nome" />
          </label>
        </div>
        <div className={UsersStyle.SearchResult}>
        <a className="results">Resultado</a>

        </div>

              </>
      )}
      {section === 'add' && (
        <>
        <label className={UsersStyle.RegisterLabel}>
          <a className={UsersStyle.RegisterTtype}>Tipo</a>
          <select
            name="tipo"
            value={userData.tipo}
            onChange={handleUserDataChange}
            className={UsersStyle.SearchSelect1}
          >
            <option value="funcionario">Funcionário</option>
            <option value="aluno">Aluno</option>
          </select>
        </label>
        <div className={UsersStyle.FormGroup}>
          <a className={UsersStyle.FormTitle}>Cadastrar Funcionario</a>
          <div className={UsersStyle.FormColumn1}>
            <label>
             <a> Nome: </a>
            <input className={UsersStyle.FormInput}
              type="text"
              name="name"
              value={userData.name}
              onChange={handleUserDataChange}
            />
            </label>
            <label>
              <a>Cpf: </a>
            <input className={UsersStyle.FormInput}
              type="text"
              name="cpf"
              value={userData.cpf}
              onChange={handleUserDataChange}
            />
            </label>
            <label>
             <a>Cargo: </a> 
              <select className={UsersStyle.FormInput}
                name="cargo"
                value={userData.cargo}
                onChange={handleUserDataChange}   
              >
                <option value="cargo1">Cargo 1</option>
                <option value="cargo2">Cargo 2</option>
              </select>
            </label>
          </div>
          <div className={UsersStyle.FormColumn1}>
          <label>
            <a>Data adimissão: </a>
          <input  className={UsersStyle.FormInput}
              type="text"
              name="dataNascimento"
              value={userData.dataNascimento}
              onChange={handleUserDataChange}
            />
          </label>
            <label>
              <a>Estado Civil: </a>
              <select  className={UsersStyle.FormInput}
                name="estadoCivil"
                value={userData.estadoCivil}
                onChange={handleUserDataChange}
              >
                <option value="solteiro">Solteiro</option>
                <option value="casado">Casado</option>
                <option value="divorciado">Divorciado</option>
                <option value="viuvo">Viúvo</option>
              </select>
            </label>
            <label>
              <a>Gênero: </a> 
              <select className={UsersStyle.FormInput}
                name="genero"
                value={userData.genero}
                onChange={handleUserDataChange}
              >
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </select>
            </label>
          </div>
          <div className={UsersStyle.FormColumn1}>
           <label>
            <a>Email: </a>
            <input className={UsersStyle.FormInput}
              type="email"
              name="email"
              value={userData.email}
              onChange={handleUserDataChange}
            />
            </label>
            <label>
              <a>Telefone: </a>
            <input className={UsersStyle.FormInput}
              type="tel"
              name="telefone"
              value={userData.telefone}
              onChange={handleUserDataChange}
            />
            </label>
            <label>
              <a>Data de nascimento: </a>
            <input className={UsersStyle.FormInput}
              type="text"
              name="dataNascimento"
              value={userData.dataNascimento}
              onChange={handleUserDataChange}
            />
            </label>
          </div>
          <div className={UsersStyle.FormColumn1}>
            <label>
              <a>Endereço: </a>
            <input className={UsersStyle.FormInput}
              type="text"
              name="endereco"
              value={userData.endereco}
              onChange={handleUserDataChange}
            />
            </label>
            <label>
              <a>Número: </a>
            <input className={UsersStyle.FormInput}
              type="text"
              name="numero"
              value={userData.numero}
              onChange={handleUserDataChange}
            />
            </label>
            <label>
              <a>Bairro: </a>
            <input className={UsersStyle.FormInput}
              type="text"
              name="bairro"
              value={userData.bairro}
              onChange={handleUserDataChange}
            />
            </label>
          </div>
          <div className={UsersStyle.FormColumn2}>
            <label>
              <a>Salário: </a>
            <input  className={UsersStyle.FormInput}
              type="text"
              name="salario"
              value={userData.salario}
              onChange={handleUserDataChange}
            />
            </label>
            <label>
              <a>Tipo de Contrato: </a>
              <select  className={UsersStyle.FormInput}
                name="tipoContrato"
                value={userData.tipoContrato}
                onChange={handleUserDataChange}
              >
                <option value="contrato1">Contrato 1</option>
                <option value="contrato2">Contrato 2</option>
              </select>
            </label>
          </div>    
             <button className={UsersStyle.FormButon} onClick={handleUserSubmit}>Cadastrar</button> 
        </div>
     
      </>
    )}
  </div>
  </>
);
};

export default Users;