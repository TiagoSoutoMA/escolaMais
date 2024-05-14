import React from 'react';
import LoginStyle from './Login.module.css'
import Email from '../../assets/img/icons8-gmail-novo-48.png'


const Login = () => {
    return(
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
                            <label className={LoginStyle.labelName} >Senha:</label>
                            <input className={LoginStyle.labelNamebox} type="password" id="password" name="password" required />
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
                            <button type="button" className={LoginStyle.buttonGmail}>Entrar com Gmail<img className={LoginStyle.logo} src={Email} alt=""/> </button>
                            <button className={LoginStyle.buttonEntrar} type="submit">Entrar</button>
                        </div>  
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;