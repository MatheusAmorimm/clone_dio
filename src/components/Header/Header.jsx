import Logo from "../../assets/images/logo-dio.png"
import Button from "../Button/Button"
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from "./style"


export default function Header({autenticado}) {
    return (
        <Wrapper>
          <Container>
              <Row>
                <img src={Logo} alt="Logo da dio"/>
                {autenticado ? (
                  <>
                   <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                   </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                  </>
                ) : null}
              </Row>
              <Row>
                  {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/111163121?v=4"/>
                  ) : (
                  <>
                    <MenuRight href="/">Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                  </>)}
              </Row>
          </Container>
        </Wrapper>
      )
    }
