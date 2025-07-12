import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";

import {
  CadastroDiv,
  Column,
  Texto,
  TextoLateral,
  TextoLogin,
  TextoLoginClick,
  Title,
} from "./styles";
import { IFormData } from "./types";

import axios, { AxiosError } from "axios";

const Cadastro = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      user: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData:IFormData) => {
try {
  const { data: existing } = await api.get(`/users?email=${formData.email}`);

  if (existing.length) {
    alert("Este e‑mail já está cadastrado.");
    return;
  }

  const response = await api.post("/users", {
    name: formData.user,
    email: formData.email,
    password: formData.password,
  });

  if (response.status === 201 || response.status === 200) {
    alert("Cadastro realizado com sucesso!");
    navigate("/feed");
  }
} catch (error) {
  if (axios.isAxiosError(error)) {
    if (!error.response) {
      alert("Não consegui conectar no servidor. Ele está rodando?");
    } else {
      alert("Erro ao cadastrar. Detalhes no console.");
      console.error("Resposta do servidor:", error.response.data);
    }
  } else {
    alert("Erro desconhecido. Veja o console.");
    console.error("Erro inesperado:", error);
  }
}
  };

  return (
    <>
      <Header />
      <Column>
        <TextoLateral>
          A plataforma para você aprender com experts, dominar as principais
          tecnologias e entrar mais rápido nas empresas mais desejadas.
        </TextoLateral>

        <CadastroDiv>
          <Title>Comece agora grátis</Title>
          <Texto>Crie sua conta e make the change._</Texto>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder="Usuário"
              leftIcon={<FaUser />}
              name="user"
              control={control}
              rules={{ required: "Usuário é obrigatório" }}
            />
            {errors.user && <span>{errors.user.message}</span>}

            <Input
              placeholder="E‑mail"
              leftIcon={<MdEmail />}
              name="email"
              control={control}
              rules={{
                required: "E‑mail é obrigatório",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Formato de e‑mail inválido",
                },
              }}
            />
            {errors.email && <span>{errors.email.message}</span>}

            <Input
              type="password"
              placeholder="password"
              leftIcon={<MdLock />}
              name="password"
              control={control}
              rules={{ required: "password é obrigatória" }}
            />
            {errors.password && <span>{errors.password.message}</span>}

            <Button title="Cadastrar" variant="secondary" type="submit" />
          </form>

          <Texto>
            Ao clicar em “criar minha conta grátis”, declaro que aceito as
            Políticas de Privacidade e os Termos de uso da Dio.
          </Texto>

          <TextoLogin>
            Já tenho conta. <TextoLoginClick>Fazer login</TextoLoginClick>
          </TextoLogin>
        </CadastroDiv>
      </Column>
    </>
  );
};

export { Cadastro };
