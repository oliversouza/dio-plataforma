import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useForm } from "react-hook-form";
import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './styles';
import { IFormData } from "./types";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
    const {handleLogin} = useAuth();

    const { control, handleSubmit, formState: { errors  } } = useForm<IFormData>({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData:IFormData) => {
        handleLogin(formData);
    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="password" leftIcon={<MdLock />}  name="password" control={control} />
                    {errors.password && <span>password é obrigatório</span>}
                    <Button title="Entrar" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha password</EsqueciText>
                    <CriarText>Criar Conta</CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }