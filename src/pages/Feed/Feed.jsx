import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import UserInfo from "../../components/UserInfo/UserInfo";

import {Container, Column, Title, TitleHighLight} from "./style"


export default function Home() {
  return (
        <>
            <Header autenticado={true}/>
            <Container>
              <Column flex={3}>
                <Title>Feed</Title>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
              </Column>
              <Column flex={1}>
                <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
                <UserInfo percentual={65} nome={'Matheus'} image="https://avatars.githubusercontent.com/u/111163121?s=400&u=6e87f2d772b100d61ca5e72cc9763719a3539b8e&v=4"/>
                <UserInfo percentual={45} nome={'Matheus'} image="https://avatars.githubusercontent.com/u/111163121?s=400&u=6e87f2d772b100d61ca5e72cc9763719a3539b8e&v=4"/>
                <UserInfo percentual={37} nome={'Matheus'} image="https://avatars.githubusercontent.com/u/111163121?s=400&u=6e87f2d772b100d61ca5e72cc9763719a3539b8e&v=4"/>
                <UserInfo percentual={35} nome={'Matheus'} image="https://avatars.githubusercontent.com/u/111163121?s=400&u=6e87f2d772b100d61ca5e72cc9763719a3539b8e&v=4"/>
                <UserInfo percentual={30} nome={'Matheus'} image="https://avatars.githubusercontent.com/u/111163121?v=4"/>
              </Column>
            </Container>
        </>
  )
}
