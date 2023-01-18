import { Container, Profile } from "./styles";
import { Input } from "../Input";

export function Header() {
    return(
        <Container>
                <h1>RocketMovies</h1>
                <Input>
                <input placeholder="Pesquisar por título"/>
                </Input>
                <Profile>
                    <div>
                        <h2>Jackson Moura</h2>
                        <button>sair</button>
                    </div>
                    <img 
                    src="https://github.com/jackson1712.png" 
                    alt="minha imagem de perfil" 
                    />
                </Profile>
        </Container>
    );
}