import React, { useState } from 'react';
import UsersStyle from './Users.module.css';
import Header from '../navbar/header/Header';

const Users = () => {

  const [section, setSection] = useState('search');
  const [name, setName] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState('');
 
  const [tipoCadastro, setTipoCadastro] = useState('funcionario');

  const toggleSection = (sectionName) => {
    setSection(sectionName);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    pesquisarUsuario(name);
  };

  const pesquisarUsuario = (name) => {
    const baseUrl = `http://localhost:8080/teachers/name/${name}`;
    
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };

    fetch(baseUrl, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Usuario nao encontrado');
        }
        return response.json();
      })
      .then(data => {
        setSearchResults(data);
        setError('');
      })
      .catch(error => {
        console.error('Erro:', error);
        setError('Usuario nao encontrado');
        setSearchResults(null);
      });
  };

 

  const handleTipoChange = (e) => {
    setTipoCadastro(e.target.value);
  };
  const roleMapping = {
    ROLE_TEACHER: 'Professor',
   
  };

  const cadastrarUsuario = (dadosUsuario) => {
    const url = 'http://localhost:8080/teachers/create';
  
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

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState(null);
  const [phone, setPhone] = useState();




  const handleSubmit = (e) => {
    e.preventDefault();

  


    if(!role) {
      alert('Defina um cargo');
    } 

    const user = {
      email,
      password,
      role
    }

    const dadosUsuario = {
      name,
      phone,
      user
    }


    cadastrarUsuario(dadosUsuario);

    setEmail('');
    setName('');
    setRole('');
    setPhone('');
    setPassword('');
  
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
            <form onSubmit={handleFormSubmit}>
              <div className={UsersStyle.Search}>
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
                  <span>Nome </span>
                  <input className={UsersStyle.SearchInput}
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)} 
                    placeholder="Enter name"
                  />
                </label>
                <button className={UsersStyle.SearchButon} type='submit'>Pesquisar</button>
              </div>
            </form>

            {error && <p>{error}</p>}

            {searchResults && (
              <div className={UsersStyle.SearchBox}>
                <h3>Resultado:</h3> 
                  {searchResults.map(result => (
                    <div key={result.id} className={UsersStyle.SearchResult}>
                      <div  className={UsersStyle.SearchInfo}> 
                      <p className={UsersStyle.SearchImage}> </p>
                      <p>Name: {result.name}</p>
                      <p>Email: {result.user.email}</p>
                      <p>Tipo: {roleMapping[result.user.role] || result.user.role}</p>
                      </div >
                    </div>
                  ))}        
              </div>
            )}
          </>
        )}

        {section === 'add' && (
          <>
          <form onSubmit={handleSubmit}>
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Maria@gmail.com"
                    />
                  </label>
                  <label>
                    <a>Senha: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="cpf"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </label>
                  <label>
                    <a>Cargo: </a>
                    <select className={UsersStyle.FormInput}
                      name="cargo"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required
                      
                    >
                     <option >Selecione...</option>
              <option  value="ROLE_ADMIN">Administrador</option>
              <option  value="ROLE_TEACHER">Professor</option>
              <option  value="ROLE_COORDINATOR">Coordenador</option>  
              <option  value="ROLE_LEGAL_RESPONSIBLE">Responsável</option>         
                    </select>
                  </label>
                </div>
                <div className={UsersStyle.FormColumn1}>
                  <label>
                    <a>Data de admissão: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="dataAdmissao"
                      
                    />
                  </label>
                  <label>
                    <a>Estado Civil: </a>
                    <select className={UsersStyle.FormInput}
                      name="estadoCivil"
                      
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ex: Maria@gmail.com"
                      required
                    />
                  </label>
                  <label>
                    <a>Telefone: </a>
                    <input className={UsersStyle.FormInput}
                      type="tel"
                      name="telefone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ex: Maria@gmail.com"
                    />
                  </label>
                  <label>
                    <a>Data de nascimento: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="dataNascimento"
                      
                    />
                  </label>
                </div>
                <div className={UsersStyle.FormColumn1}>
                  <label>
                    <a>Endereço: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="endereco"
                    
                    />
                  </label>
                  <label>
                    <a>Número: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="numero"
                      
                    />
                  </label>
                  <label>
                    <a>Bairro: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="bairro"
                    
                    />
                  </label>
                </div>
                <div className={UsersStyle.FormColumn2}>
                  <label>
                    <a>Salário: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="salario"
                      
                    />
                  </label>
                  <label>
                    <a>Tipo de Contrato: </a>
                    <select className={UsersStyle.FormInput}
                      name="tipoContrato"
                     
                    >
                      <option value="contrato1">Contrato 1</option>
                      <option value="contrato2">Contrato 2</option>
                    </select>
                  </label>
                </div>
                <button type="submit" className={UsersStyle.FormButon} >Cadastrar</button>
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
                    
                    />
                  </label>
                  <label>
                    <a>Cpf: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="cpf"
                   
                    />
                  </label>
                  <label>
                    <a>Data de início: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="dataNascimento"
                     
                    />
                  </label>
                </div>
                <div className={UsersStyle.FormColumn1}>
                  <label>
                    <a>Data de admissão: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="dataAdmissao"
                     
                    />
                  </label>
                  <label>
                    <a>Estado Civil: </a>
                    <select className={UsersStyle.FormInput}
                      name="estadoCivil"
                    
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
                     
                    />
                  </label>
                  <label>
                    <a>Telefone: </a>
                    <input className={UsersStyle.FormInput}
                      type="tel"
                      name="telefone"
                   
                    />
                  </label>
                  <label>
                    <a>Data de nascimento: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="dataNascimento"
                     
                    />
                  </label>
                </div>
                <div className={UsersStyle.FormColumn1}>
                  <label>
                    <a>Endereço: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="endereco"
                      
                    />
                  </label>
                  <label>
                    <a>Número: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="numero"
                     
                    />
                  </label>
                  <label>
                    <a>Bairro: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="bairro"
                     
                    />
                  </label>
                </div>
                <div className={UsersStyle.FormColumn2}>
                  <label>
                    <a>Salário: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="salario"
                  
                    />
                  </label>
                  <label>
                    <a>Tipo de Contrato: </a>
                    <select className={UsersStyle.FormInput}
                      name="tipoContrato"
                      
                    >
                      <option value="contrato1">Contrato 1</option>
                      <option value="contrato2">Contrato 2</option>
                    </select>
                  </label>
                </div>
                <button className={UsersStyle.FormButon} >Cadastrar</button>
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
                   
                    />
                  </label>
                  <label>
                    <a>Cpf: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="cpf"
                     
                    />
                  </label>
                  <label>
                    <a>Data de nascimento: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="dataNascimento"
                    
                    />
                  </label>
                </div>
                <div className={UsersStyle.FormColumn1}>
                  <label>
                    <a>Data de admissão: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="dataAdmissao"
                     
                    />
                  </label>
                  <label>
                    <a>Estado Civil: </a>
                    <select className={UsersStyle.FormInput}
                      name="estadoCivil"
                    
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
                     
                    />
                  </label>
                  <label>
                    <a>Telefone 1: </a>
                    <input className={UsersStyle.FormInput}
                      type="tel"
                      name="telefone"
                      
                    />
                  </label>
                  <label>
                    <a>Telefone 2: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="dataNascimento"
                   
                    />
                  </label>
                </div>
                <div className={UsersStyle.FormColumn1}>
                  <label>
                    <a>Endereço: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="endereco"
                    
                    />
                  </label>
                  <label>
                    <a>Número: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="numero"
                    
                    />
                  </label>
                  <label>
                    <a>Bairro: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="bairro"
                    
                    />
                  </label>
                </div>
                <div className={UsersStyle.FormColumn2}>
                <label>
                    <a>Alunos: </a>
                    <select className={UsersStyle.SelectAlunos}
                      name="estadoCivil"
                     
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
                     
                    />
                  </label>
                  <label>
                    <a>Porfissão: </a>
                    <input className={UsersStyle.FormInput}
                      type="text"
                      name="salario"
                     
                    />
                  </label>
                </div>
                <button className={UsersStyle.FormButon}>Cadastrar</button>
              </div>
            )}
           </form>

          </>
        )}
      </div>
     
    </>
    
  );
};

export default Users;