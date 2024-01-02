import { Container, Form, Background } from "./styles";
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock} from 'react-icons/fi';
import { Input } from '../../componets/Input';
import { Button } from '../../componets/button';

export function SignIn(){
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links Úteis.</p>

                <h2>Faça seu Login</h2>

                <Input 
                  placeholder="E-mail"
                  type="text"
                  icon={FiMail}
                />
                <Input 
                  placeholder="Senha"
                  type="password"
                  icon={FiLock}
                />
                <Button title="Entrar" />

                <Link to="/register">
                    Criar Conta
                </Link>
            </Form>
            
            <Background />
        </Container>
    );
}