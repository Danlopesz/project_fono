import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Refeitorio() {
  return (
    <Layout>
      <div className="location-indicator">
        <p className="location">📍 Você escaneou este QR Code no Refeitório</p>
      </div>

      <section className="content">
        <p>
          Ambientes barulhentos podem prejudicar a audição ao longo do tempo.
          Cuidar da saúde auditiva é essencial para o bem-estar.
        </p>
      </section>

      <section className="content">
        <h2>Por que isso importa aqui?</h2>
        <p>
          O refeitório costuma ter níveis elevados de ruído, o que pode
          impactar a audição se a exposição for frequente.
        </p>
      </section>

      <section className="content">
        <h2>Dicas práticas</h2>
        <ul>
          <li>Evite volumes altos em fones de ouvido</li>
          <li>Faça pausas em ambientes silenciosos</li>
          <li>Evite exposição prolongada ao ruído</li>
        </ul>
      </section>

      <section className="content">
        <h2>Sinais de alerta</h2>
        <p>
          Zumbido, dificuldade para ouvir ou necessidade de aumentar muito
          o volume podem indicar problemas auditivos.
        </p>
      </section>
    </Layout>
  );
}
