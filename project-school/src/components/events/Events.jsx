import Header from '../navbar/header/Header';
import EventsStyle from './Events.module.css';
import { IoMdCreate } from 'react-icons/io';
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Events = () => {
    return (
        <>
            <Header/>
            <div className={EventsStyle.eventsDivGeral}>
                <div>
                    <div>
                        <h1 className={EventsStyle.eventsTitulo}>Eventos</h1>
                    </div>
                </div>
                <div className={EventsStyle.eventsDivQuadro}>
                    <div className={EventsStyle.eventsQuadro}>
                        <div className={EventsStyle.eventsDivEvents}>
                            <div className={EventsStyle.events}>
                                <div className={EventsStyle.eventsDivForm}>
                                    <div className={EventsStyle.eventsForm}></div>
                                </div>
                                <div className={EventsStyle.eventsInformes}>
                                    <div className={EventsStyle.eventsInformesDiv}>
                                        <h5 className={EventsStyle.eventsTextsInformes}>Nome:<span className={EventsStyle.eventsSubTextsInformes}>Mostra pedagógica</span></h5>
                                        <h5 className={EventsStyle.eventsTextsInformes}>Local:<span className={EventsStyle.eventsSubTextsInformes}>Escola</span></h5>
                                        <h5 className={EventsStyle.eventsTextsInformes}>Endereço:<span className={EventsStyle.eventsSubTextsInformes}>Rua Marquês do Herval, 512A - Centro</span></h5>
                                    </div>
                                    <div className={EventsStyle.eventsInformesDiv}>
                                        <h5 className={EventsStyle.eventsTextsInformes}>Ínicio:<span className={EventsStyle.eventsSubTextsInformes}>01/04/2024</span></h5>
                                        <h5 className={EventsStyle.eventsTextsInformes}>Término:<span className={EventsStyle.eventsSubTextsInformes}>04/04/2024</span></h5>
                                        <h5 className={EventsStyle.eventsTextsInformes}>Horário:<span className={EventsStyle.eventsSubTextsInformes}>07:00/17:00</span></h5>
                                        <h5 className={EventsStyle.eventsTextsInformes}>
                                            <div className={EventsStyle.eventsStatusSpace}>
                                            Status:
                                                <span className={EventsStyle.eventsSubTextsInformes}>Ativo</span>
                                                <div className={EventsStyle.eventsStatus}></div>
                                            </div>
                                        </h5>
                                    </div>
                                </div>
                                <div className={EventsStyle.eventsDivIcones}>
                                    <button className={EventsStyle.eventsCanetaEditar}>
                                        Editar 
                                        <IoMdCreate className={`${EventsStyle.evetnsIcone} ${EventsStyle.eventsIconeEditar}`}/>
                                    </button>
                                    <button className={EventsStyle.eventsLixeira}>
                                        <BsTrash className={EventsStyle.evetnsIcone}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={EventsStyle.eventsDivButton}>
                        <Link to='/createEvents'><button className={EventsStyle.eventsButtonCriar}>Criar evento</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Events;