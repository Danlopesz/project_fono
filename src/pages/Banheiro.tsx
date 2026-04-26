import Layout from "../components/Layout";

export default function Banheiro() {
  return (
    <Layout>
      <div className="location-indicator">
        <p className="location">📍 Banheiro</p>
      </div>

      <section className="content">
        <div className="hook-box">
          <p>
            Um momento de pausa. Aproveite para conhecer a Fonoaudiologia —
            uma área que provavelmente afeta mais a sua vida do que você imagina.
          </p>
        </div>
      </section>

      <section className="content">
        <h2>O que faz um fonoaudiólogo?</h2>
        <ul className="area-list">
          <li className="area-card">
            <span className="area-badge">🗣️</span>
            <div className="area-info">
              <strong>Voz</strong>
              <p>Avaliação,prevenção e reabilitação dos distúrbios vocais,
                promovendo o uso saudável e eficiente da voz em diferentes contextos</p>
            </div>
          </li>
          <li className="area-card">
            <span className="area-badge">👂</span>
            <div className="area-info">
              <strong>Audição</strong>
              <p>Diagnóstico, tratamento e reabilitação dos distúrbios de audição e do equilíbrio,
                com ênfase também na prevenção da perda auditiva</p>
            </div>
          </li>
          <li className="area-card">
            <span className="area-badge">💬</span>
            <div className="area-info">
              <strong>Fala e linguagem</strong>
              <p>Avaliação, prevenção, diagnóstico e intervenção nos transtornos da comunicação oral,
                promovendo o desenvolvimento e a funcionalidade da linguagem e da fala em todas as fases da vida</p>
            </div>
          </li>
          <li className="area-card">
            <span className="area-badge">👄</span>
            <div className="area-info">
              <strong>Motrocidade Orofacial</strong>
              <p>Avaliação e intervenção das funções orofaciais, como sucção, respiração,
                mastigação, deglutição e fala, e de seus distúrbios</p>
            </div>
          </li>
        </ul>
      </section>

      <section className="content">
        <div className="alert-card alert-card--info">
          <span className="alert-icon">💡</span>
          <div className="alert-text">
            <strong>Você sabia?</strong>
            O fonoaudiólogo atua desde a triagem neonatal até o cuidado com
            idosos — uma das profissões com maior amplitude na saúde.
          </div>
        </div>
      </section>
    </Layout>
  );
}
