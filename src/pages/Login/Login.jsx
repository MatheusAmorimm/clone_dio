import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import {
  Container,
  Column,
  CreateAccount,
  ForgeitPassword,
  Row,
  SubLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./style";
import Input from "../../components/Input/Input";
import { api } from '../../services/api'

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email não é válido")
      .required(`Campo obrigatório`),
    password: yup
      .string()
      .min(3, "No minimo 3 caracteres")
      .required("Campo obrigatório"),
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

  const onSubmit = async formData => {
    try {
      const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.password}`);

      if(data.length === 1){
        navigate('/feed')
    } else {
        alert('Email ou senha invalido')
    };

    } catch {
      alert(`Houve um erro, tente novamente!`);
    }
  };

  // const handleClickSignIn = () =>{
  //   navigate('/feed');
  // }

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, doiminar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubLogin>Faça seu login e make the change._</SubLogin>

            <form onSubmit={handleSubmit(onSubmit)}>
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
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>

            <Row>
              <ForgeitPassword>Esqueci Minha Senha</ForgeitPassword>
              <CreateAccount href="/signup">Criar Conta</CreateAccount>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}
