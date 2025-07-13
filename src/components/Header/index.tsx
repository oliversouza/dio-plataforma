import logo from "../../assets/logo-dio.png";

import { Button } from "../Button";

import {
    Container,
    Wrapper,
    BuscarInputContainer,
    Input,
    Row,
    Menu,
    MenuRight,
    UserPicture,
} from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
    const { user, handleSignOut } = useAuth();
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Link to="/">
                        <img src={logo} alt="Logo da dio" />
                    </Link>
                    {user.id ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..." />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {user.id ? (
                        <>
                            <UserPicture src="https://avatars.githubusercontent.com/u/130983677?v=44" />
                            <a href="#" onClick={handleSignOut}>Sair</a>
                        </>
                    ) : (
                        <>
                            <MenuRight href="/">Home</MenuRight>
                            <Button title="Entrar" />
                            <Button title="Cadastrar" />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    );
};

export { Header };
