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
              <p>Qualidade, saúde e resistência vocal</p>
            </div>
          </li>
          <li className="area-card">
            <span className="area-badge">👂</span>
            <div className="area-info">
              <strong>Audição</strong>
              <p>Diagnóstico e prevenção de perda auditiva</p>
            </div>
          </li>
          <li className="area-card">
            <span className="area-badge">💬</span>
            <div className="area-info">
              <strong>Fala e linguagem</strong>
              <p>Da infância à vida adulta</p>
            </div>
          </li>
          <li className="area-card">
            <span className="area-badge">🍽️</span>
            <div className="area-info">
              <strong>Deglutição</strong>
              <p>Mastigação, engolir e funções orais</p>
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
