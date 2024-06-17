import ClassStyle from './ClassStyle.module.css';
import Header from '../navbar/header/Header';

const Class = () => {
    return(
        <>
            <Header/>
            <div className={ClassStyle.classDivGeral}>
                <h1 className={ClassStyle.classTitle}>Classes</h1>
                <div className={ClassStyle.classDivButtons}>
                    <button className={`${ClassStyle.classButtonSearch} ${ClassStyle.classButton}`}>Pesquisar classe</button>
                    <button className={`${ClassStyle.classButtonCreate} ${ClassStyle.classButton}`}>Criar classe</button>
                </div>
                <div className={ClassStyle.classDivSquare}>
                    <div className={ClassStyle.classSquareSearch}>
                        <h2 className={ClassStyle.classTitleDois}>Pesquisar classe</h2>
                        <div>
                            <label htmlFor="" className={ClassStyle.classLabelTitle}>Série</label>
                            <select name="serie" id="" className={ClassStyle.classSelect}>
                                <option value="">1°</option>
                                <option value="">2°</option>
                                <option value="">3°</option>
                            </select>
                            <label htmlFor="" className={ClassStyle.classLabelTitle}>Turma</label>
                            <select name="turma" id="" className={ClassStyle.classSelect}>
                                <option value="">A</option>
                                <option value="">B</option>
                                <option value="">C</option>
                                <option value="">D</option>
                            </select>
                            <label htmlFor="" className={ClassStyle.classLabelTitle}>Turno</label>
                            <select name="turno" id="" className={ClassStyle.classSelect}>
                                <option value="">Manhã</option>
                                <option value="">Tarde</option>
                            </select>
                        </div>
                        <div className={ClassStyle.classDivButton}>
                            <button className={`${ClassStyle.classButtonSearch2} ${ClassStyle.classButton}`}>Pesquisar</button>
                        </div>
                    </div>
                </div>
                <div className={ClassStyle.classDivSquareResult}>
                    
                </div>
            </div>
        </>
    )
}

export default Class;