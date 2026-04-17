import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Index = () => {
    return (
        <Layout>
            <section className="about">
                <h2>O que é Fonoaudiologia?</h2>
                <p>
                    A Fonoaudiologia é a área da saúde responsável pela prevenção,
                    avaliação e tratamento de distúrbios relacionados à comunicação
                    humana, audição, voz e deglutição.
                </p>
            </section>

            <section className="areas">
                <h2>Explore por ambiente</h2>

                <div className="area">
                    <h3>Sala dos Professores</h3>
                    <p>Cuidados com a voz e higiene vocal.</p>
                    <Link to="/sala-professores">Saiba mais</Link>
                </div>

                <div className="area">
                    <h3>Banheiro</h3>
                    <p>Conheça a Fonoaudiologia e suas áreas.</p>
                    <Link to="/banheiro">Saiba mais</Link>
                </div>

                <div className="area">
                    <h3>Refeitório</h3>
                    <p>Saúde auditiva e exposição ao ruído.</p>
                    <Link to="/refeitorio">Saiba mais</Link>
                </div>

                <div className="area">
                    <h3>Elevador</h3>
                    <p>Informações rápidas sobre a Fonoaudiologia.</p>
                    <Link to="/elevador">Saiba mais</Link>
                </div>
            </section>
        </Layout>
    );
};

export default Index;