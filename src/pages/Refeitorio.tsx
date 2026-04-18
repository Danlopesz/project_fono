import Layout from "../components/Layout";

export default function Refeitorio() {
  return (
    <Layout>
      <div className="location-indicator">
        <p className="location">📍 Refeitório</p>
      </div>

      <section className="content">
        <div className="hook-box">
          <p>
            Sabe aquela sensação de "ouvido cheio" após um ambiente muito
            barulhento? Não é normal — pode ser um sinal de alerta que a
            maioria ignora.
          </p>
        </div>
      </section>

      <section className="content">
        <h2>Ruído e audição</h2>
        <p>
          Ambientes com mais de 85 decibéis — como um refeitório cheio —
          podem causar dano auditivo progressivo com exposição frequente.
          O problema: a perda auditiva por ruído é permanente e silenciosa.
        </p>
      </section>

      <section className="content">
        <h2>Como se proteger</h2>
        <ul className="tip-list">
          <li className="tip-item">
            <span className="tip-icon">🎧</span>
            <span className="tip-text">
              Fones com volume máximo por mais de 1h/dia já causam dano.
              Use no máximo 60% do volume
            </span>
          </li>
          <li className="tip-item">
            <span className="tip-icon">🌿</span>
            <span className="tip-text">
              Procure ambientes silenciosos nas pausas — seus ouvidos também
              precisam descansar
            </span>
          </li>
          <li className="tip-item">
            <span className="tip-icon">📅</span>
            <span className="tip-text">
              Faça avaliação auditiva periodicamente, mesmo sem queixas
            </span>
          </li>
        </ul>
      </section>

      <section className="content">
        <div className="alert-card">
          <span className="alert-icon">⚠️</span>
          <div className="alert-text">
            <strong>Sinais de alerta auditivo</strong>
            Zumbido, dificuldade de entender conversas em grupo ou necessidade
            constante de aumentar o volume merecem atenção imediata.
          </div>
        </div>
      </section>
    </Layout>
  );
}
