import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Banheiro() {
  return (
    <Layout>
      <div className="location-indicator">
        <p className="location">📍 Você escaneou este QR Code no Banheiro</p>
      </div>

      <section className="content">
        <p>
          A Fonoaudiologia é a área da saúde que cuida da comunicação,
          audição, voz e funções como mastigação e deglutição.
        </p>
      </section>

      <section className="content">
        <h2>Áreas de atuação</h2>
        <ul>
          <li>Fala e linguagem</li>
          <li>Audição</li>
          <li>Voz</li>
          <li>Deglutição</li>
        </ul>
      </section>

      <section className="content">
        <h2>Você sabia?</h2>
        <p>
          O fonoaudiólogo atua desde a infância até a terceira idade,
          ajudando na qualidade de vida e comunicação.
        </p>
      </section>

      <section className="content">
        <h2>Quando procurar ajuda?</h2>
        <p>
          Dificuldade para falar, ouvir, engolir ou alterações na voz
          são sinais importantes que merecem atenção.
        </p>
      </section>
    </Layout>
  );
}
