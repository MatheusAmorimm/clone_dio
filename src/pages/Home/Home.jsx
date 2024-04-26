import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Banner from "../../assets/images/banner.png";


import {Container, TextContent, Title, TitleHighLight} from "./style"

export default function Home() {

  const navigate = useNavigate();

  const handleClickSignIn = () =>{
    navigate('/login')
  }

  return (
        <>
            <Header/>
            <Container>
              <div>
                  <Title>
                      <TitleHighLight>
                        Implemente
                        <br/>
                      </TitleHighLight>
                      o seu futuro global agora!
                  </Title>
                  <TextContent>
                      Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo
                      e encare seu novo desafio profissional, evoluindo em comunidade com 
                      os melhores experts
                  </TextContent>
                  <Button title = "Começar Agora" variant = "secondary" onClick={handleClickSignIn}/>
              </div>
              <div>
                  <img src={Banner} alt="Imagem principal"/>
              </div>
            </Container>
        </>
  )
}
