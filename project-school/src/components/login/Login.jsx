import React, { useState } from 'react';
import LoginStyle from './Login.module.css';
import Email from '../../assets/img/icons8-gmail-novo-48.png';
import {  FaEyeSlash } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className={LoginStyle.loginBody}>
                <div className={LoginStyle.loginContainer}>
                    <h1 className={LoginStyle.entrar}>Entrar</h1>
                    <form action="#" method="POST">
                        <div className={LoginStyle.inputGroup}>
                            <label className={LoginStyle.labelName} htmlFor="email">Email:</label>
                            <input className={LoginStyle.labelNamebox} type="email" id="email" name="email" required />
                        </div>
                        <div className={LoginStyle.inputGroup}>
                            <label className={LoginStyle.labelName}>Senha:</label>
                            <div className={LoginStyle.passwordInputGroup}>
                                <input className={LoginStyle.labelNamebox} type={showPassword ? "text" : "password"} id="password" name="password" required />
                                <button type="button" className={LoginStyle.showPasswordButton} onClick={togglePasswordVisibility}>
                                    {showPassword ? <MdOutlineRemoveRedEye /> : <FaEyeSlash/> }
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
                            <button type="button" className={LoginStyle.buttonGmail}>Entrar com Gmail<img className={LoginStyle.logo} src={Email} alt="" /> </button>
                            <button className={LoginStyle.buttonEntrar} type="submit">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
