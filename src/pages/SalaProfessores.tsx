import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function SalaProfessores() {
  return (
    <Layout>
      <div className="location-indicator">
        <p className="location">📍 Você escaneou este QR Code na Sala dos Professores</p>
      </div>

      <section className="content">
        <p>
          Professores utilizam a voz como principal ferramenta de trabalho.
          Cuidar dela é essencial para manter a saúde e o desempenho profissional.
        </p>
      </section>

      <section className="content">
        <h2>Por que isso importa aqui?</h2>
        <p>
          O uso intenso da voz pode causar desgaste vocal, levando a rouquidão,
          cansaço e até problemas mais sérios se não houver cuidado.
        </p>
      </section>

      <section className="content">
        <h2>Dicas práticas</h2>
        <ul>
          <li>Beba água regularmente</li>
          <li>Evite gritar ou falar muito alto</li>
          <li>Faça pausas ao longo do dia</li>
          <li>Evite pigarrear com frequência</li>
        </ul>
      </section>

      <section className="content">
        <h2>Quando procurar um fonoaudiólogo?</h2>
        <p>
          Rouquidão constante, dor ao falar ou perda de voz são sinais de alerta
          e devem ser avaliados por um profissional.
        </p>
      </section>
    </Layout>
  );
}