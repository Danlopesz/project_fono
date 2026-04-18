import Layout from "../components/Layout";

export default function Elevador() {
  return (
    <Layout>
      <div className="location-indicator">
        <p className="location">📍 Elevador</p>
      </div>

      <section className="content">
        <div className="hook-box">
          <p>
            Você tem uns 30 segundos enquanto o elevador sobe. Tempo suficiente
            para aprender algo sobre Fonoaudiologia que você nunca mais vai esquecer.
          </p>
        </div>
      </section>

      <section className="content">
        <h2>Sabia disso?</h2>
        <ul className="tip-list">
          <li className="tip-item">
            <span className="tip-icon">👶</span>
            <span className="tip-text">
              O fonoaudiólogo atua no teste da orelhinha — presente desde o
              primeiro dia de vida
            </span>
          </li>
          <li className="tip-item">
            <span className="tip-icon">🧠</span>
            <span className="tip-text">
              Gagueira, dislexia e dificuldades de aprendizado têm tratamento
              fonoaudiológico
            </span>
          </li>
          <li className="tip-item">
            <span className="tip-icon">🎤</span>
            <span className="tip-text">
              Cantores e apresentadores consultam fonoaudiólogos regularmente
              — não só quando há problema
            </span>
          </li>
          <li className="tip-item">
            <span className="tip-icon">🏥</span>
            <span className="tip-text">
              Em UTIs, o fono avalia se pacientes podem engolir com segurança
              antes de se alimentar
            </span>
          </li>
        </ul>
      </section>

      <section className="content">
        <div className="alert-card alert-card--info">
          <span className="alert-icon">💡</span>
          <div className="alert-text">
            <strong>Fono não é só fala</strong>
            A área cobre voz, audição, linguagem, deglutição e cognição —
            uma das mais abrangentes da saúde.
          </div>
        </div>
      </section>
    </Layout>
  );
}
