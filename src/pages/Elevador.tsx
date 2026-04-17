import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Elevador() {
  return (
    <Layout>
      <div className="location-indicator">
        <p className="location">📍 Você escaneou este QR Code no Elevador</p>
      </div>

      <section className="content">
        <h2>Você sabia?</h2>
        <ul>
          <li>O fonoaudiólogo cuida da sua voz</li>
          <li>Ajuda na comunicação e linguagem</li>
          <li>Atua na audição</li>
          <li>Também trata dificuldades para engolir</li>
        </ul>
      </section>

      <section className="content">
        <h2>Por que isso importa?</h2>
        <p>
          Pequenos sinais podem indicar problemas maiores.
          A identificação precoce faz toda a diferença.
        </p>
      </section>

      <section className="content">
        <h2>Fique atento</h2>
        <p>
          Alterações na voz, dificuldade para ouvir ou falar
          devem ser avaliadas por um profissional.
        </p>
      </section>
    </Layout>
  );
}
