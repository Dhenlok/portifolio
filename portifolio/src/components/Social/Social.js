import { ContainerSocial } from "./styled";
import linkedin from "../../img/group-10-copy.svg";
import github from "../../img/fill-1-copy.svg";
import whatsapp from "../../img/group-3-copy.svg";
import instagram from "../../img/group-8-copy.svg";

const Social = () => {
  return (
    <ContainerSocial>
      <a
        href="https://www.linkedin.com/in/lucas-homero-19b97581/"
        target="_blank"
      >
        <img alt="Icone Linkedin" src={linkedin} />
      </a>

      <a href="https://github.com/Dhenlok" target="_blank">
        <img alt="Icone github" src={github} />
      </a>

      <a
      href="https://wa.me/5588997705683"
      target="_blank">
        <img alt="Icone WhatsApp" src={whatsapp} />
      </a>

      <a href="https://www.instagram.com/lucas.h.sabino/" target="_blank">
        <img alt="Icone instagram" src={instagram} />
      </a>
    </ContainerSocial>
  );
};

export default Social;
