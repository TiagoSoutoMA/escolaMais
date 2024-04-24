import React from 'react';
import Logo from '../../assets/img/Logo.jpg';
import HomeStyle from './Home.module.css'

const Home = () => {
    return(
        <>
            <header className={HomeStyle.header}>
                <div className={HomeStyle.logo}>
                    <a href="/"><img src={Logo} alt="" /></a>
                </div>
                <div className={HomeStyle.navigation}>
                    <a href="/"><p className={`${HomeStyle.navItensSpace} ${HomeStyle.navItemClicado}`}>Ínicio</p></a>
                    <a href="/"><p className={`${HomeStyle.navItensSpace} ${HomeStyle.navItem}`}>Serviços</p></a>
                    <a href="/"><p className={HomeStyle.navItem}>Contato</p></a>
                </div>
                <div className={HomeStyle.buttons}>
                    <button className={HomeStyle.buttonLeft}>Entrar</button>
                    <button className={HomeStyle.buttonRight}>Cadastrar-se</button>
                </div>
            </header>
            
            <section className={HomeStyle.wallpaper}>
                <div>
                    <div className={HomeStyle.title}>
                        <h1>O sistema do <span className={HomeStyle.destaque}>Escola+</span> entrega<br /> <span className={HomeStyle.destaque}>Mais</span> praticidade para sua<br /> escola!</h1>
                    </div>
                    <div className={HomeStyle.subtitle}>
                        <h3>Confira abaixo nossos serviços, apresentaremos nossas funcionalidades da plataforma.</h3>
                    </div>
                    <div>
                        <button className={HomeStyle.buttonSection}>Saiba Mais</button>
                    </div>
                </div>
            </section>

            <section className={HomeStyle.information}>
                <div className={HomeStyle.titles}>
                    <div className={HomeStyle.positionTitles}>
                        <div className={`${HomeStyle.titleSec2} ${HomeStyle.titleSec2Space}`}>
                            <h1>Sistema escolar, tudo que você precisa em um só.</h1>
                        </div>
                        <div className={HomeStyle.subtitleSec2}>
                            <h2>As ferramentas, táticas e insights certos para projetar a experiência ideal do cliente </h2>
                        </div>
                    </div>
                </div>
                <div className={HomeStyle.alignBox}>
                    <div className={HomeStyle.box}>
                        <div className={HomeStyle.informationBox}>
                            <div className={HomeStyle.titleBox}>
                                <h1>Primeira funcionalidade</h1>
                            </div>
                            <div className={HomeStyle.subtitleBox}>
                                <p>Lorem ipsum dolor sit amet consectetur. Nibh neque scelerisque pellentesque urna semper vel est egestas amet. Posuere velit cursus mauris cursus tortor pharetra odio sit. Nisl risus mauris ut enim tempor urna arcu. Quisque nunc elementum consequat risus aliquet in mi. Felis velit maecenas vel ut integer vestibulum id enim augue. Odio mattis risus pellentesque fusce.</p>
                             </div>
                        </div>
                        <div className={HomeStyle.imageBox}>
                            <div className={HomeStyle.testeImg}></div>
                            <div className={HomeStyle.buttonsImg}><div className={HomeStyle.positionButton}>...</div></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;