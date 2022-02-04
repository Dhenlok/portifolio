import { ContainerSocial } from "./styled";
import linkedin from "../../img/group-10-copy.svg";
import github from "../../img/fill-1-copy.svg";
import whatsapp from "../../img/group-3-copy.svg";
import instagram from "../../img/group-8-copy.svg";

const Social = () => {
  return (
    <ContainerSocial>
      <a href="https://br.linkedin.com/">
        <img alt="Icone Linkedin" src={linkedin} />
      </a>

      <a href="https://github.com/">
        <img alt="Icone github" src={github} />
      </a>

      <a>
        <img alt="Icone WhatsApp" src={whatsapp} />
      </a>

      <a href="https://instagram.com">
        <img alt="Icone instagram" src={instagram} />
      </a>
    </ContainerSocial>
  );
};

export default Social;
