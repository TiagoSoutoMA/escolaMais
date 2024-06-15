import Header from '../navbar/header/Header';
import DashboardStyle from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <>
            <Header/>
            <div className={DashboardStyle.dashboardGeral}>
                <h1 className={DashboardStyle.dashboardTitle}>Dashboard</h1>

                <div className={DashboardStyle.dashboardbanner}>

                </div>

                <div className={DashboardStyle.dashboardshortcuts}>
                    <div className={DashboardStyle.dashboardRF}>
                        <div className={DashboardStyle.dashboardText}>
                            Rendimento Financeiro
                            <br />
                            <br />
                            ABRIl
                        </div>
                    </div>
                    <div className={DashboardStyle.dashboardmenssage}>
                         <div className={DashboardStyle.dashboardText}>
                            Mensagem
                            <br />
                            <br />
                            ABRIl
                        </div>
                    </div>
                    <div className={DashboardStyle.dashboardRE}>
                        <div className={DashboardStyle.dashboardText}>
                            Rendimento escolar
                            <br />
                            <br />
                            ABRIl
                        </div>
                    </div>
                    <div className={DashboardStyle.dashboardrequests}>
                        <div className={DashboardStyle.dashboardText}>
                            Solicitaçoes
                            <br />
                            <br />
                            ABRIl
                        </div>
                    </div>
                </div>

                <div className={DashboardStyle.dashboardresume}>
                    <div className={DashboardStyle.dashboardcalendar}>
                        <div className={DashboardStyle.dashboardText1}>
                            Sexta-Feira
                            <br />
                            <p>22</p>
                            <br />
                            <br />
                            Mostra Pedagogica
                        </div>
                    </div>
                    <div className={DashboardStyle.dashboardCE}>
                        <div className={DashboardStyle.dashboardText2}>
                            Coeficiente Escolar
                            <br />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Dashboard;
