import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Index = () => {
    return (
        <Layout>
            <section className="about">
                <div className="hook-box">
                    <p>
                        Você chegou aqui por um QR Code. Cada ambiente da faculdade tem
                        informações específicas sobre Fonoaudiologia — a área da saúde que
                        cuida da sua voz, audição, fala e deglutição.
                    </p>
                </div>
            </section>

            <section className="areas">
                <h2>Explore por ambiente</h2>

                <div className="area-card">
                    <div className="area-badge">🎙️</div>
                    <div className="area-info">
                        <h3>Sala dos Professores</h3>
                        <p>Higiene vocal e cuidados com a voz</p>
                    </div>
                    <Link to="/sala-professores" className="area-link">Ver mais →</Link>
                </div>

                <div className="area-card">
                    <div className="area-badge">📋</div>
                    <div className="area-info">
                        <h3>Banheiro</h3>
                        <p>O que é a Fonoaudiologia e suas áreas</p>
                    </div>
                    <Link to="/banheiro" className="area-link">Ver mais →</Link>
                </div>

                <div className="area-card">
                    <div className="area-badge">🔊</div>
                    <div className="area-info">
                        <h3>Refeitório</h3>
                        <p>Saúde auditiva e exposição ao ruído</p>
                    </div>
                    <Link to="/refeitorio" className="area-link">Ver mais →</Link>
                </div>

                <div className="area-card">
                    <div className="area-badge">🛗</div>
                    <div className="area-info">
                        <h3>Elevador</h3>
                        <p>Curiosidades rápidas sobre a Fono</p>
                    </div>
                    <Link to="/elevador" className="area-link">Ver mais →</Link>
                </div>
            </section>
        </Layout>
    );
};

export default Index;