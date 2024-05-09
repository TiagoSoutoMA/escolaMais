import React from 'react';
import Email from '../../assets/img/icons8-gmail-novo-48.png'

const Login = () => {
    return(
        <>
            <div className='corpo'>
                <div className="login-container">
                    <h1 className='entrar'>Entrar</h1>
                    <form action="#" method="POST">
                        <div className="input-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Senha:</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <div className="remember-me">
                            <input type="checkbox" id="remember" name="remember" />
                            <label htmlFor="remember">Lembrar a senha</label>
                            <a href="/" className="forgot-passwordd">Esqueci a senha</a>
                        </div>

                        <div className="button-group">
                            <button type="button" className="google-login">Entrar com Gmail<img  src={Email} alt=""/> </button>
                            <button type="submit">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;