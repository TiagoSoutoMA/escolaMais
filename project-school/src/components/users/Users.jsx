import React, { useState } from 'react';
import UsersStyle from './Users.module.css';
import Header from '../navbar/header/Header';

const Users = () => {


  const [searchParams, setSearchParams] = useState({
    nome: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    pesquisarUsuario(searchParams);
  };

  const pesquisarUsuario = (dadosUsuario) => {
    const baseUrl = 'http://localhost:8080/users/all';

    
    const queryParams = new URLSearchParams(dadosUsuario).toString();
    const url = `${baseUrl}?${queryParams}`;

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch(url, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Usuario nao encontrado');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  };



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
  const [tipoCadastro, setTipoCadastro] = useState('funcionario');

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

  const handleTipoChange = (e) => {
    setTipoCadastro(e.target.value);
  };

  const [searchResults, setSearchResults] = useState({
    nome: 'Nome',
    classe: 'Classe',
    turma: 'Turma',
    turno: 'Turno',
    matricula: 'Matrícula',
    status: 'Status'
  });


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
      <Header />
      <div>
        <div>
          <h2 className={UsersStyle.UsersTitle}>Usuários</h2>
          <button className={UsersStyle.UsersBotao1} onClick={() => toggleSection('search')}>Pesquisar Usuário</button>
          <button className={UsersStyle.UsersBotao2} onClick={() => toggleSection('add')}>Cadastrar Usuário</button>
        </div>

        {section === 'search' && (
          <>
            <div className={UsersStyle.Search} onSubmit={handleFormSubmit}>
              <h2 className={UsersStyle.SearchTitle}>Pesquisar usuários</h2>
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
                <input className={UsersStyle.SearchInput} type="text" name="nome" value={searchParams.nome}
            onChange={handleInputChange}/>
              </label>
              <button className={UsersStyle.SearchButon} onClick={handleUserSubmit}>Pesquisar</button>
            </div>
            <div className={UsersStyle.SearchBox}>
              <a className="results">Resultado</a>
              <div className={UsersStyle.SearchResult}>
                <div className={UsersStyle.SearchImage}>
                  <div className={UsersStyle.SearchInfo}>
                    <label> Nome: 
                     {searchResults.nome} 
                   </label>
                    <label> Classe:
                     {searchResults.classe}
                   </label>
                    <label> Turma: 
                     {searchResults.turma}
                   </label>
                   <label>Turno:
                     {searchResults.turno}
                   </label>
                   <label>Matrícula:
                     {searchResults.matricula}
                   </label>
                   <label> Status:
                     {searchResults.status}
                   </label>              
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {section === 'add' && (
          <>
            <label className={UsersStyle.RegisterLabel}>
              <a className={UsersStyle.RegisterType}>Tipo</a>
              <select
                name="tipo"
                value={tipoCadastro}
                onChange={handleTipoChange}
                className={UsersStyle.SearchSelect1}
              >
                <option value="funcionario">Funcionário</option>
                <option value="aluno">Aluno</option>
                <option value="responsavel">Responsável</option>
              </select>
            </label>
            {tipoCadastro === 'funcionario' && (
              <div className={UsersStyle.FormGroup}>
                <div className={UsersStyle.HeadTitle}>
                <h2 className={UsersStyle.FormTitle}>Cadastrar Funcionário</h2>
                </div>
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
                    <a>Data de admissão: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="dataAdmissao"
                      value={userData.dataAdmissao}
                      onChange={handleUserDataChange}
                    />
                  </label>
                  <label>
                    <a>Estado Civil: </a>
                    <select className={UsersStyle.FormInput}
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
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="salario"
                      value={userData.salario}
                      onChange={handleUserDataChange}
                    />
                  </label>
                  <label>
                    <a>Tipo de Contrato: </a>
                    <select className={UsersStyle.FormInput}
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
            )}

            {tipoCadastro === 'aluno' && (
              <div className={UsersStyle.FormGroup}>
                <h2 className={UsersStyle.FormTitle}>Cadastrar Aluno</h2>
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
                    <a>Data de início: </a>
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
                    <a>Data de admissão: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="dataAdmissao"
                      value={userData.dataAdmissao}
                      onChange={handleUserDataChange}
                    />
                  </label>
                  <label>
                    <a>Estado Civil: </a>
                    <select className={UsersStyle.FormInput}
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
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="salario"
                      value={userData.salario}
                      onChange={handleUserDataChange}
                    />
                  </label>
                  <label>
                    <a>Tipo de Contrato: </a>
                    <select className={UsersStyle.FormInput}
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
            )}

            {tipoCadastro === 'responsavel' && (
              <div className={UsersStyle.FormGroup}>
                <h2 className={UsersStyle.FormTitle}>Cadastrar Responsável</h2>
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
                    <a>Data de admissão: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="dataAdmissao"
                      value={userData.dataAdmissao}
                      onChange={handleUserDataChange}
                    />
                  </label>
                  <label>
                    <a>Estado Civil: </a>
                    <select className={UsersStyle.FormInput}
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
                    <a>Telefone 1: </a>
                    <input className={UsersStyle.FormInput}
                      type="tel"
                      name="telefone"
                      value={userData.telefone}
                      onChange={handleUserDataChange}
                    />
                  </label>
                  <label>
                    <a>Telefone 2: </a>
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
                    <a>Alunos: </a>
                    <select className={UsersStyle.SelectAlunos}
                      name="estadoCivil"
                      value={userData.estadoCivil}
                      onChange={handleUserDataChange}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </label>
                  <label>
                    <a>Parentesco: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="salario"
                      value={userData.salario}
                      onChange={handleUserDataChange}
                    />
                  </label>
                  <label>
                    <a>Porfissão: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="salario"
                      value={userData.salario}
                      onChange={handleUserDataChange}
                    />
                  </label>
                </div>
                <button className={UsersStyle.FormButon} onClick={handleUserSubmit}>Cadastrar</button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Users;