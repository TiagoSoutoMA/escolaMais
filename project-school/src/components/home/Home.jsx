import React, { useState, useEffect } from 'react';
import Logo from '../../assets/img/Logo2.png';
import HomeStyle from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [activeNavItem, setActiveNavItem] = useState('inicio');
    const [activeImgItem, setActiveImgItem] = useState(0); 

    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
    };

    function handleScroll() {
        const sections = document.querySelectorAll('section'); 
        const scrollPosition = window.scrollY + window.innerHeight / 2; 

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight; 

            if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                setActiveNavItem(section.id); 
            }
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    const handleImgClick = (item) => {
        setActiveImgItem(item);
    };

    const funcionalidades = [
        {
            titulo: 'Primeira funcionalidade',
            subtitulo:
                'Lorem ipsum dolor sit amet consectetur. Nibh neque scelerisque pellentesque urna semper vel est egestas amet. Posuere velit cursus mauris cursus tortor pharetra odio sit. Nisl risus mauris ut enim tempor urna arcu. Quisque nunc elementum consequat risus aliquet in mi. Felis velit maecenas vel ut integer vestibulum id enim augue. Odio mattis risus pellentesque fusce.',
            imagem: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            titulo: 'Segunda funcionalidade',
            subtitulo:
                'Lorem ipsum dolor sit amet consectetur. Nibh neque scelerisque pellentesque urna semper vel est egestas amet. Posuere velit cursus mauris cursus tortor pharetra odio sit. Nisl risus mauris ut enim tempor urna arcu. Quisque nunc elementum consequat risus aliquet in mi. Felis velit maecenas vel ut integer vestibulum id enim augue. Odio mattis risus pellentesque fusce.',
            imagem: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            titulo: 'Terceira funcionalidade',
            subtitulo:
                'Lorem ipsum dolor sit amet consectetur. Nibh neque scelerisque pellentesque urna semper vel est egestas amet. Posuere velit cursus mauris cursus tortor pharetra odio sit. Nisl risus mauris ut enim tempor urna arcu. Quisque nunc elementum consequat risus aliquet in mi. Felis velit maecenas vel ut integer vestibulum id enim augue. Odio mattis risus pellentesque fusce.',
            imagem: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            titulo: 'Quarta funcionalidade',
            subtitulo:
                'Lorem ipsum dolor sit amet consectetur. Nibh neque scelerisque pellentesque urna semper vel est egestas amet. Posuere velit cursus mauris cursus tortor pharetra odio sit. Nisl risus mauris ut enim tempor urna arcu. Quisque nunc elementum consequat risus aliquet in mi. Felis velit maecenas vel ut integer vestibulum id enim augue. Odio mattis risus pellentesque fusce.',
            imagem: 'https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            titulo: 'Quinta funcionalidade',
            subtitulo:
                'Lorem ipsum dolor sit amet consectetur. Nibh neque scelerisque pellentesque urna semper vel est egestas amet. Posuere velit cursus mauris cursus tortor pharetra odio sit. Nisl risus mauris ut enim tempor urna arcu. Quisque nunc elementum consequat risus aliquet in mi. Felis velit maecenas vel ut integer vestibulum id enim augue. Odio mattis risus pellentesque fusce.',
            imagem: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            titulo: 'Sexta funcionalidade',
            subtitulo:
                'Lorem ipsum dolor sit amet consectetur. Nibh neque scelerisque pellentesque urna semper vel est egestas amet. Posuere velit cursus mauris cursus tortor pharetra odio sit. Nisl risus mauris ut enim tempor urna arcu. Quisque nunc elementum consequat risus aliquet in mi. Felis velit maecenas vel ut integer vestibulum id enim augue. Odio mattis risus pellentesque fusce.',
            imagem: 'https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ];

    return(
        <>
            <div className={HomeStyle.allPage}>
                <header className={HomeStyle.header}>
                    <div className={HomeStyle.logo}>
                        <a href="/"><img src={Logo} alt="" /></a>
                    </div>
                    <div className={HomeStyle.navigation}>
                        <a href="#section1" onClick={() => handleNavItemClick('section1')}>
                            <p className={`${HomeStyle.navItensSpace} ${activeNavItem === 'section1' ? HomeStyle.navItemClicado : HomeStyle.navItem}`}>Ínicio</p>
                        </a>
                        <a href="#section2" onClick={() => handleNavItemClick('section2')}>
                            <p className={`${HomeStyle.navItensSpace} ${activeNavItem === 'section2' ? HomeStyle.navItemClicado : HomeStyle.navItem}`}>Serviços</p>
                        </a>
                        <a href="#section3" onClick={() => handleNavItemClick('section3')}>
                            <p className={activeNavItem === 'section3' ? HomeStyle.navItemClicado : HomeStyle.navItem}>Fale conosco</p>
                        </a>
                    </div>
                    <div className={HomeStyle.buttons}>
                        <Link to = "/login"><button className={HomeStyle.buttonLeft}>Entrar</button></Link>
                    </div>
                </header>
                
                <section className={HomeStyle.wallpaper} id='section1'>
                    <div>
                        <div className={HomeStyle.title}>
                            <h1>O sistema do <span className={HomeStyle.destaque}>Escola+</span> entrega<br /> <span className={HomeStyle.destaque}>Mais</span> praticidade para sua<br /> escola!</h1>
                        </div>
                        <div className={HomeStyle.subtitle}>
                            <h3>Confira abaixo nossos serviços, apresentaremos nossas funcionalidades da plataforma.</h3>
                        </div>
                        <div>
                            <a href="#section2"><button className={HomeStyle.buttonSection}>Saiba Mais</button></a>
                        </div>
                    </div>
                </section>

                <section className={HomeStyle.information} id='section2'>
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
                                    <h1>{funcionalidades[activeImgItem].titulo}</h1>
                                </div>
                                <div className={HomeStyle.subtitleBox}>
                                    <p>{funcionalidades[activeImgItem].subtitulo}</p>
                                 </div>
                            </div>
                            <div className={HomeStyle.imageBox}>
                                <div className={HomeStyle.testeImg}>
                                    <img src={funcionalidades[activeImgItem].imagem} alt="" />
                                </div>
                                <div className={HomeStyle.buttonsImg}>
                                    <div className={HomeStyle.positionButton}>
                                        <button onClick={() => handleImgClick(0)} className={`${HomeStyle.optionImg} ${HomeStyle.optionImgSpace} ${
                                        activeImgItem === 0 ? HomeStyle.optionImgClicado : ''
                                        }`}></button>
                                        <button onClick={() => handleImgClick(1)} className={`${HomeStyle.optionImg} ${HomeStyle.optionImgSpace} ${
                                        activeImgItem === 1 ? HomeStyle.optionImgClicado : ''
                                        }`}></button>
                                        <button onClick={() => handleImgClick(2)} className={`${HomeStyle.optionImg} ${HomeStyle.optionImgSpace} ${
                                        activeImgItem === 2 ? HomeStyle.optionImgClicado : ''
                                        }`}></button>
                                        <button onClick={() => handleImgClick(3)} className={`${HomeStyle.optionImg} ${HomeStyle.optionImgSpace} ${
                                        activeImgItem === 3 ? HomeStyle.optionImgClicado : ''
                                        }`}></button>
                                        <button onClick={() => handleImgClick(4)} className={`${HomeStyle.optionImg} ${HomeStyle.optionImgSpace} ${
                                        activeImgItem === 4 ? HomeStyle.optionImgClicado : ''
                                        }`}></button>
                                        <button onClick={() => handleImgClick(5)} className={`${HomeStyle.optionImg} ${
                                        activeImgItem === 5 ? HomeStyle.optionImgClicado : ''
                                        }`}></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={HomeStyle.secForm} id='section3'>
                    <div className={HomeStyle.spaceForm}>
                        <h3 className={HomeStyle.fontWord}>Se interessou por nosso sistema? Entre em contato conosco através do formulário abaixo, <br/> preencha os campos e receba mais informações do <span className={HomeStyle.destaque}>Escola+</span></h3>
                        <form action="" className={HomeStyle.formSec}>
                            <div className={HomeStyle.formDiv}>
                                <label htmlFor="" className={HomeStyle.formLabel}>
                                    <span className={HomeStyle.formSpan}>Nome completo:</span>
                                    <input type="text" className={HomeStyle.formInput}/>
                                </label>
                                <label htmlFor="" className={HomeStyle.formLabel}>
                                    <span className={HomeStyle.formSpan}>Email:</span>
                                    <input type="email" className={HomeStyle.formInput}/>
                                </label>
                                <label htmlFor="" className={HomeStyle.formLabel}>
                                    <span className={HomeStyle.formSpan}>Telefone:</span>
                                    <input type="tel" className={HomeStyle.formInput}/>
                                </label>
                            </div>
                            <button className={HomeStyle.formButton}>Enviar</button>
                        </form>
                    </div>
                </section>

                <footer className={HomeStyle.footerHome}>
                    <div className={HomeStyle.arrow}></div>
                    <div className={HomeStyle.boxConteudoFooter}>
                        <div className={HomeStyle.conteudoFooter}>
                            <div>
                                <h1 className={HomeStyle.tituloFooter}>Escola+</h1>
                                <div className={HomeStyle.boxInformartionFooter}>
                                    <div className={HomeStyle.iconFooter}></div>
                                    <p className={HomeStyle.informationFooter}>R. Manoel Cardoso Palhano, 124-152 - Itararé, Campina Grande - PB, 58408-326</p>
                                </div>
                                <div className={HomeStyle.boxInformartionFooter}>
                                    <div className={HomeStyle.iconFooter}></div>
                                    <p className={HomeStyle.informationFooter}>(83) 2101-8877</p>
                                </div>
                                <div className={HomeStyle.spaceIcons}>
                                    <a href="">
                                        <div className={HomeStyle.iconFooter}></div>
                                    </a>
                                    <a href="">
                                        <div className={HomeStyle.iconFooter}></div>
                                    </a>
                                    <a href="">
                                        <div className={HomeStyle.iconFooter}></div>
                                    </a>
                                </div>
                            </div>
                            <div className={HomeStyle.ultimoInformationFooter}>
                                <p className={HomeStyle.informationFooter}>© 2024 Escola+, Inc.     Terms       Privacy(Updated 03/2024)</p>
                            </div>
                        </div>
                        <div className={HomeStyle.boxNavFooter}>
                            <div className={HomeStyle.navPrincipal}>
                                <h1 className={HomeStyle.tituloFooter}>Inicio</h1>
                            </div>
                            <div>
                                <h1 className={HomeStyle.tituloFooter}>Funcionalidades</h1>
                                <ul>
                                    <li className={HomeStyle.itensUl}>Primeira funcionalidade</li>
                                    <li className={HomeStyle.itensUl}>Segunda funcionalidade</li>
                                    <li className={HomeStyle.itensUl}>Terceira funcionalidade</li>
                                    <li className={HomeStyle.itensUl}>Quarta funcionalidade</li>
                                    <li className={HomeStyle.itensUl}>Quinta funcionalidade</li>
                                    <li className={HomeStyle.itensUl}>Sexta funcionalidade</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Home;