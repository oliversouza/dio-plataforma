import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Feed } from "./pages/feed";
import { Cadastro } from "./pages/cadastro";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { GlobalStyle } from "./styles/global";
import { AuthContextProvider } from "./context/auth";

function App() {
    return (
        <Router>
            <AuthContextProvider>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                </Routes>
            </AuthContextProvider>
        </Router>
    );
}

export default App;
