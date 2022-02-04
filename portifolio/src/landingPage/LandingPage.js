import { Course, Education, Fullstack, Knowledge, WhoAmI } from "./styled";
import Social from "../components/Social/Social";
import Header from "../components/Header/Header";
import selfie from "../img/selfie.png";

const LandingPage = () => {
  return (
    <div>
      <Header />

      <Social />

      <WhoAmI>
        <div>
          <h1>Eu sou Lucas Homero</h1>
          <h2>Desenvolvedor Web Full Stack</h2>
          <p>Apaixonado por tecnologia e programação</p>
          <p>RESUMO</p>
          <p>TECNOLOGIAS</p>
          <a
            href="https://www.canva.com/design/DAEuhs92yfM/LwZaoQjWi-iQwYGTECpfHQ/view?utm_content=DAEuhs92yfM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            target="_blank"
          >
            CV EM PDF
          </a>
        </div>
        <div>
          <img src={selfie} />
        </div>
      </WhoAmI>

      <Knowledge>
        <h2>Meus conhecimentos</h2>
        <Fullstack>
          <div>
            <h3>Front-end</h3>
            <p>
              Desenvolvimento de aplicações web utilizando React, NextJS, HTML,
              CSS e JavaScript.
            </p>
          </div>
          <div>
            <h3>Back-end</h3>
            <p>
              Aplicações utilizando NodeJS, Typescript e MySQL. Criação de API´s
              para comunicação com front-end seguindo princípio de Clean Code.
            </p>
          </div>
        </Fullstack>
      </Knowledge>

      <Education>
        <Course>Curso 1</Course>
        <Course>Educação</Course>
        <Course>Curso 3</Course>
      </Education>
    </div>
  );
};

export default LandingPage;
