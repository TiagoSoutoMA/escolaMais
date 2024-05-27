import Header from '../navbar/header/Header';
import CreateEventsStyle from './CreateEvents.module.css';

const CreateEvents = () => {
    return(
        <>  
            <Header />
            <div className={CreateEventsStyle.createDivGeral}>
                <h1 className={CreateEventsStyle.createTitle}>Criar Eventos</h1>
                <div className={CreateEventsStyle.createSpaceQuadrado}>
                    <div className={CreateEventsStyle.createQuadradoForm}>
                        <div>
                            <form action="">
                                <div className={CreateEventsStyle.createSpaceForm}>
                                    <label htmlFor="" className={CreateEventsStyle.createLabel}>Nome</label>
                                    <input type="text" placeholder='Digete seu nome' className={CreateEventsStyle.createInputText}/>

                                    <label htmlFor="" className={CreateEventsStyle.createLabel}>Data ínicio</label>
                                    <input type="date" />

                                    <label htmlFor="" className={CreateEventsStyle.createLabel}>Data término</label>
                                    <input type="date" />
                                </div>
                                <div className={CreateEventsStyle.createSpaceForm}>   
                                    <label htmlFor="" className={CreateEventsStyle.createLabel}>Endereço</label>
                                    <input type="text" placeholder='Digite a rua' className={CreateEventsStyle.createInputText}/>

                                    <label htmlFor="" className={CreateEventsStyle.createLabel}>Bairro</label>
                                    <input type="text" placeholder='Digite o bairro' className={CreateEventsStyle.createInputText}/>

                                    <label htmlFor="" className={CreateEventsStyle.createLabel}>Número</label>
                                    <input type="number" placeholder='Digite o número'/>
                                </div>
                                <div className={CreateEventsStyle.createSpaceForm}>   
                                    <label htmlFor="" className={CreateEventsStyle.createLabel}>Local</label>
                                    <input type="text" placeholder='Escola' className={CreateEventsStyle.createInputText}/>

                                    <label htmlFor="" className={CreateEventsStyle.createLabel}>Horário ínicio</label>
                                    <input type="time" />

                                    <label htmlFor="" className={CreateEventsStyle.createLabel}>Horário término</label>
                                    <input type="time" />
                                </div>
                            </form>
                        </div>
                        <div className={CreateEventsStyle.createSpaceButton}>
                            <button className={CreateEventsStyle.createButton}>Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateEvents;