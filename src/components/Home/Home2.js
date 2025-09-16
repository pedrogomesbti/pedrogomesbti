import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXE <span className="purple"> -ME </span> APRESENTAR
            </h1>
            <p className="home-about-body">
              Me chamo Pedro Gomes e sou apaixonado por tecnologia e programação. Desde cedo busco aprender e evoluir, sempre me desafiando com novos projetos e ideias. 🚀
              <br />
              <br />Desenvolvo sites, lojas virtuais, portfólios, cardápip web entre outros que dão visibilidade e ajudam negócios a prosperar.
              <i>
                <b className="purple"> HTML5, Javascript and css. </b>
              </i>
              <br />
              <br />
              Busco sempre novas tecnologias &nbsp;
              <i>
                <b className="purple">e soluções criativas para transformar </b>  ideias em realidade.{" "}
                <b className="purple">
                 
                </b>
              </i>
              <br />
              <br />
             Sou CEO e fundador da Invest Shop
              with <b className="purple">uma empresa criada por mim</b> com o
              <i>
                <b className="purple">
                  {" "}
                  propósito de oferecer soluções inovadoras e construir um futuro promissor.
                </b>
              </i>
              &nbsp;
              <i>
                <b className="purple"></b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Tem uma ideia?</h1>
            <p>
              Sinta-se à vontade <span className="purple">para conversar </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pedrogomesbti"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pedrogomesbti"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pedrogomesbti"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pedrogomesbti"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
