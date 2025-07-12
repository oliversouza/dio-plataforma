import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import BannerImage from "../../assets/logo-dio.png";
import Banner from "../../assets/banner.png";

import { Container, TextContent, Title, TitleHighLight } from "./styles";
import { useForm } from "react-hook-form"

const Home = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm()

  const onSubmit = (data:any) => console.log(data)

  console.log(watch("example"))
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighLight>
              Implemente <br />
            </TitleHighLight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button title="Começar agora" variant="secondary" onClick={() => null} />
        </div>
        <div>
          <img src={Banner} alt="Imagem Principal" />
        </div>
      </Container>
    </>
  );
};

export { Home };
