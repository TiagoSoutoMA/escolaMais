import React, { useState } from 'react';
import LoginStyle from './Login.module.css';
import Email from '../../assets/img/icons8-gmail-novo-48.png';
import { FaEyeSlash } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from "react-icons/md";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [token, setToken] = useState();
    const [role, setRole] = useState();
    const [id, setId] = useState();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const verificarLogin = (e) => {
        e.preventDefault();
        const dadosUsuario = { email, password };
        verificacaoLogin(dadosUsuario);
    };

    function verificacaoLogin(dadosUsuario) {
        const url = "http://localhost:8080/auth/login";
        const request = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dadosUsuario)
        };

        fetch(url, request)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao fazer Login');
                }
                return response.json();
            })
            .then(data => {
                console.log("Usuario Logado: ", data);
                setToken(data.token);
                setRole(data.role);
                setId(data.id);
                
                
                console.log("token: ", token)
                console.log("id: ", id)
                console.log("role: ", role)
            })
            .catch(error => {
                console.error("Erro:", error);
            });
    }

    return (
        <>
            <div className={LoginStyle.loginBody}>
                <div className={LoginStyle.loginContainer}>
                    <h1 className={LoginStyle.entrar}>Entrar</h1>
                    <form onSubmit={verificarLogin}>
                        <div className={LoginStyle.inputGroup}>
                            <label className={LoginStyle.labelName} htmlFor="email">Email:</label>
                            <input
                                className={LoginStyle.labelNamebox}
                                type="email"
                                id="email"
                                name="email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={LoginStyle.inputGroup}>
                            <label className={LoginStyle.labelName}>Senha:</label>
                            <div className={LoginStyle.passwordInputGroup}>
                                <input
                                    className={LoginStyle.labelNamebox}
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className={LoginStyle.showPasswordButton}
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <MdOutlineRemoveRedEye /> : <FaEyeSlash />}
                                </button>
                            </div>
                        </div>
                        <div className={LoginStyle.rememberMe}>
                            <div>
                                <input className={LoginStyle.rememberCheck} type="checkbox" name="remember" />
                                <label className={LoginStyle.forgotPasswordd} htmlFor="remember">Lembrar a senha</label>
                            </div>
                            <div>
                                <a href="/" className={LoginStyle.forgotPasswordd}>Esqueci a senha</a>
                            </div>
                        </div>
                        <div className={LoginStyle.buttonGroup}>
                            <button type="button" className={LoginStyle.buttonGmail}>
                                Entrar com Gmail<img className={LoginStyle.logo} src={Email} alt="" />
                            </button>
                            <button className={LoginStyle.buttonEntrar} type="submit">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
