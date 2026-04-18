import Layout from "../components/Layout";

export default function SalaProfessores() {
  return (
    <Layout>
      <div className="location-indicator">
        <p className="location">📍 Sala dos Professores</p>
      </div>

      <section className="content">
        <div className="hook-box">
          <p>
            Professores usam a voz como ferramenta de trabalho todos os dias.
            Pequenos hábitos fazem uma diferença enorme ao longo dos anos.
          </p>
        </div>
      </section>

      <section className="content">
        <h2>Por que isso importa aqui?</h2>
        <p>
          O uso contínuo da voz em sala de aula provoca fadiga vocal progressiva.
          Sem cuidado, rouquidão e nódulos nas cordas vocais são consequências reais.
        </p>
      </section>

      <section className="content">
        <h2>Dicas de higiene vocal</h2>
        <ul className="tip-list">
          <li className="tip-item">
            <span className="tip-icon">💧</span>
            <span className="tip-text">
              Hidrate-se constantemente — água em temperatura ambiente é ideal
            </span>
          </li>
          <li className="tip-item">
            <span className="tip-icon">🤫</span>
            <span className="tip-text">
              Evite pigarrear. Prefira engolir saliva ou beber água
            </span>
          </li>
          <li className="tip-item">
            <span className="tip-icon">⏸️</span>
            <span className="tip-text">
              Faça pausas vocais durante o dia — o descanso também é parte do cuidado
            </span>
          </li>
          <li className="tip-item">
            <span className="tip-icon">🚫</span>
            <span className="tip-text">
              Evite sussurrar — exige mais esforço das cordas vocais do que falar normalmente
            </span>
          </li>
        </ul>
      </section>

      <section className="content">
        <div className="alert-card">
          <span className="alert-icon">⚠️</span>
          <div className="alert-text">
            <strong>Quando procurar um fonoaudiólogo?</strong>
            Rouquidão por mais de 2 semanas, dor ao falar ou cansaço vocal
            frequente são sinais que merecem avaliação profissional.
          </div>
        </div>
      </section>
    </Layout>
  );
}
