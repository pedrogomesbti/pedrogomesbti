import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá, meu nome é <span className="purple">Pedro Gomes </span>
            moro no <span className="purple"> Rio de Janeiro, Brasil.</span>
            <br />
            Atualmente, trabalho como desenvolvedor de software sozinho.

            <br />
            Estou cursando Analise e densenvolvimento de Sistemas (Estácio) estou no 6° período.
            
            <br />
            <br />
            Além de codificação, algumas outras atividades que adoro fazer!

          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Desenvolver projetos digitais e empreender
            </li>
            <li className="about-activity">
              <ImPointRight /> Estudar novas tecnologias e estratégias de crescimento
            </li>
            <li className="about-activity">
              <ImPointRight /> Praticar esportes e manter hábitos saudáveis
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A motivação é a faísca que acende o caminho, mas é a disciplina que mantém o fogo aceso até chegar ao destino."{" "}
          </p>
          <footer className="blockquote-footer">Pedro Gomes</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
