import { Course1, Course2, Course3, Education, Fullstack, Knowledge, WhoAmI } from "./styled";
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
          <p>
            Desde muito jovem despertei interesse pelo mundo da computação,
            assim me tornei um desenvolvedor web Fullstack apaixonado pelo que
            faço.
          </p>
          <p>✔ NodeJS ✔ MySQL ✔ HTML ✔ JavaScript ✔ Typescript ✔ React ✔ CSS</p>
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
        <Course1>
          <h3>Ciência da computação</h3>
          <p>2015 / 2023 </p>
          <p>
            Cursando pelo Instituto federal de ciências e tecnologia do Ceará
            (IFCE), onde realizei um projeto voltado para o ensino de Computação
            Gráfica.
          </p>
        </Course1>
        <Course2>
          <h3>
            Labenu
          </h3>

          <p>
            2021 / 2022
          </p>

        <p>Curso de desenvolvimento web fullstack com 1000+ horas de aulas e projetos práticos.</p>
        </Course2>
        <Course3>
          <h3>
          Cursos complementares Online
          </h3>
          <p>
            Flutter - Alura (2021)
          </p>
          <p>
            Bootcamp Java - Dio (2021)
          </p>
          </Course3>
      </Education>
    </div>
  );
};

export default LandingPage;
