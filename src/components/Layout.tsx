import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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

            {/* ✅ FOOTER COMPLETO MANTIDO */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-logo-section">
                        <img
                            src="/img/logo.svg"
                            alt="Ciências Médicas"
                            className="footer-logo-main"
                        />
                    </div>
                    <div className="footer-socials">
                        <a
                            href="https://www.youtube.com/user/faculdadecmmg"
                            target="_blank"
                            className="footer-social-icon"
                            rel="noreferrer"
                        >
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/faculdadecmmg"
                            target="_blank"
                            className="footer-social-icon"
                            rel="noreferrer"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/fono01cmmg?igsh=MWdicW55ZmxtOTlnMA%3D%3D"
                            target="_blank"
                            className="footer-social-icon"
                            rel="noreferrer"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/school/cienciasmedicasmg/"
                            target="_blank"
                            className="footer-social-icon"
                            rel="noreferrer"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    <div className="footer-bottom">
                        <p>© Projeto acadêmico - Fonoaudiologia</p>
                    </div>
                    <div className="footer-dev">
                        <p>Desenvolvido por Daniel Lopes</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
