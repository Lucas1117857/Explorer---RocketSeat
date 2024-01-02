import { Container, Form, Background } from "./styles";
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock} from 'react-icons/fi';
import { Input } from '../../componets/Input';
import { Button } from '../../componets/button';

export function SignUp(){
    return(
        <Container>
           <Background />
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links Úteis.</p>

                <h2>Crie sua Conta</h2>


                <Input 
                  placeholder="Nome"
                  type="text"
                  icon={FiLogIn}
                />
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
                <Button title="Cadrastrar" />

                <Link to="/">
                    Voltar para Login
                </Link>
            </Form>
            
            
        </Container>
    );
}