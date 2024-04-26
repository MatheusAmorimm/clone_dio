import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import {
  Container, Column, Row, SubSignUp, Title, TitleSignUp, Wrapper, FazerLogin,
  Comun
} from "./style";

import Input from "../../components/Input/Input";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';

const schema = yup
  .object({
    name: yup
      .string()
      .required(`Campo obrigatório`),
    email: yup
      .string()
      .email('Esse email não é válido')
      .required("Campo obrigatório"),
    password: yup
        .string()
        .min(3, 'Minimo de 3 caracteres')
        .required('Campo Obrigatório'),
  })
  .required();

export default function Login() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  console.log(isValid, errors);

  const onSubmit = () => {
    navigate('/login');
  } 


  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleSignUp>Comece agora grátis</TitleSignUp>
            <SubSignUp>Crie a sua conta e make the change._</SubSignUp>

            <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                name="name"
                control={control}
                placeholder="Nome Completo..."
                leftIcon={<MdPerson/>}
                errorMessage={errors?.name?.message}
              />
              <Input
                name="email"
                control={control}
                placeholder="Email..."
                leftIcon={<MdEmail/>}
                errorMessage={errors?.email?.message}
              />
              <Input
                name="password"
                control={control}
                placeholder="Password..."
                type="password"
                leftIcon={<MdLock/>}
                errorMessage={errors?.password?.message}
              />
              <Button title="Criar minha conta grátis" variant="secondary" type="submit" />
            </form>

            <Row>
                <Comun>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Comun>
            </Row>

            <Row>
            <Comun>Ja tenho conta</Comun><FazerLogin>. Fazer login</FazerLogin>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}
