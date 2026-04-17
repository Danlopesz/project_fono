import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
    children: ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <>
            <header className="header">
                <h1 className="title">Fonoaudiologia</h1>
                <p className="subtitle">
                    Cuidando da comunicação, audição e qualidade de vida
                </p>

                {/* Navegação opcional */}
                <nav className="nav">
                    <Link to="/">Início</Link>
                </nav>
            </header>

            <main className="main">{children}</main>

            {/* ✅ SEU FOOTER COMPLETO MANTIDO */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-column">
                        <img
                            src="/img/logo.svg"
                            alt="Ciências Médicas"
                            className="footer-logo-main"
                        />
                    </div>

                    <div className="footer-column">
                        <h3>Nossa Localização</h3>
                        <div className="footer-info">
                            <div className="footer-item">
                                <div>
                                    <b>Campus I</b>
                                    Alameda Ezequiel Dias, 275, CEP: 30130-110<br />
                                    Belo Horizonte/MG - Brasil<br />
                                    Telefone: (31) 3248-7100
                                </div>
                            </div>
                            <div className="footer-item">
                                <div>
                                    <b>Campus II</b>
                                    Av. Dos Andradas, 1.093, Centro, CEP: 30120-016<br />
                                    Belo Horizonte/MG - Brasil<br />
                                    Telefone: (31) 3248-7100
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3>Atendimento</h3>
                        <div className="footer-info">
                            <div className="footer-item">
                                <div>
                                    <b>Central de Relacionamento</b>
                                    Telefone: (31) 3248-7112<br />
                                    <a
                                        href="https://wa.me/5531996836725"
                                        target="_blank"
                                        className="footer-link"
                                        rel="noreferrer"
                                    >
                                        <i className="fab fa-whatsapp"></i> (31) 99683-6725
                                    </a>
                                </div>
                            </div>
                            <div className="footer-item">
                                <div>
                                    <b>Ouvidoria</b>
                                    <a
                                        href="https://wa.me/553132487170"
                                        target="_blank"
                                        className="footer-link"
                                        rel="noreferrer"
                                    >
                                        <i className="fab fa-whatsapp"></i> (31) 3248-7170
                                    </a>
                                </div>
                            </div>
                            <div className="footer-item">
                                <div>
                                    <b>Matrículas e Cursos</b>
                                    Telefone: (31) 3248-7213<br />
                                    <a
                                        href="https://api.whatsapp.com/send/?phone=5531972125339"
                                        target="_blank"
                                        className="footer-link"
                                        rel="noreferrer"
                                    >
                                        <i className="fab fa-whatsapp"></i> (31) 97212-5339
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-socials">
                        <a
                            href="https://www.instagram.com/fono01cmmg?igsh=MWdicW55ZmxtOTlnMA%3D%3D"
                            target="_blank"
                            className="footer-social-icon"
                            rel="noreferrer"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                    <p>
                        © 2026 Faculdade Ciências Médicas de Minas Gerais - Projeto acadêmico - Fonoaudiologia
                    </p>
                </div>
            </footer>
        </>
    );
}