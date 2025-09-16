import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus Trabalhos <strong className="purple">Recentes </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns projetos nos quais trabalhei recentemente.

        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Agendamento Online"
              description="Sistema que permite gerenciar clientes e horários de forma prática. Possui cadastro de clientes, agendamento de horários e visualização da agenda em calendário, com interface simples e responsiva para computador e celular. Ideal para organizar atendimentos e otimizar o dia a dia da manicure."
              ghLink="https://www.instagram.com/pedrogomesbti"
              demoLink="https://www.instagram.com/pedrogomesbti"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portfólio Profissional"
              description="Site portfólio criado para apresentar o trabalho da manicure e demonstrar o painel de agendamentos online. Mostra funcionalidades como marcação de horários, cadastro de clientes e visualização da agenda, com design moderno, responsivo e fácil de navegar."
              ghLink="https://www.instagram.com/pedrogomesbti"
              demoLink="https://www.instagram.com/pedrogomesbti"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Painel de controle de vendas"
              description="Sistema desenvolvido para gerenciar vendas, produtos e clientes de forma prática. Permite cadastrar produtos, acompanhar pedidos, registrar clientes e visualizar relatórios em tempo real, com interface intuitiva e responsiva. Ideal para organizar e otimizar o processo de vendas de pequenos negócios"
              ghLink="https://www.instagram.com/pedrogomesbti"
              demoLink="https://www.instagram.com/pedrogomesbti"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Loja Virtual"
              description="Site de e-commerce completo para vender chocolates online, desenvolvido para pequenos empreendedores que querem fugir de depender de marketplaces. Permite navegar pelos produtos, adicionar ao carrinho e finalizar pedidos, com design moderno, atraente e totalmente responsivo, oferecendo uma experiência de compra prática e confiável para os clientes."
              ghLink="https://www.instagram.com/pedrogomesbti"
              demoLink="https://www.instagram.com/pedrogomesbti"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Site Profissional"
              description="Site desenvolvido para vender produtos tecnológicos online, oferecendo catálogo de produtos, carrinho de compras e finalização de pedidos de forma prática. Design moderno, profissional e responsivo, pensado para proporcionar uma experiência de compra confiável e eficiente, ideal para empreendedores que querem gerir suas vendas de forma independente, sem depender de marketplaces."
              ghLink="https://www.instagram.com/pedrogomesbti"
              // demoLink="https://www.instagram.com/pedrogomesbti" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Cardápio Web"
              description="Site desenvolvido como cardápio digital interativo, permitindo que clientes vejam produtos, preços e detalhes diretamente pelo celular ou computador. Design moderno, responsivo e fácil de usar, ideal para restaurantes e lanchonetes que querem oferecer praticidade aos clientes e reduzir a dependência de cardápios físicos..
              "
              ghLink="https://www.instagram.com/pedrogomesbti"
              // demoLink="https://www.instagram.com/pedrogomesbti"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
