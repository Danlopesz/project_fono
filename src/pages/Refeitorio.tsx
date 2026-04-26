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
          Ambientes com níveis de progressão sonora acima de 85 dB(A),
          como ocorre em alguns momentos no refeitório cheio, especialmente quando a exposição é frequente
          ou prolongada, estão associados ao risco de dano auditivo progressivo.
          O problema: a perda auditiva induzida por ruído tem caráter geralmente irreversível, pode evoluir de forma gradual e inicialmente assintomática.
        </p>
      </section>

      <section className="content">
        <h2>Como se proteger</h2>
        <ul className="tip-list">
          <li className="tip-item">
            <span className="tip-icon">🎧</span>
            <span className="tip-text">
              A exposição frequente a níveis sonoros acima de 85 dB(A) ou a volumes
              elevados em fones de ouvido pode aumentar o risco de perda auditiva por ruído,sendo recomendado o uso de volume moderado(60%do volume) e limitação de tempo de exposição
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
