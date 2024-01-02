import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Container, Form, Avatar } from "./styles";
import { Input } from '../../componets/Input';
import { Button } from '../../componets/button';
import { Link } from 'react-router-dom';

export function Profile() {
    return (
        <Container>
            
                <header>
                    <Link to="/">
                        <FiArrowLeft />
                    </Link>
                </header>
            <Form>
                <Avatar>
                    <img src="src/assets/Avatar.png" alt="foto do usuario" />
                
                <label htmlFor="avatar">
                    <FiCamera />

                    <input
                      id="Avatar"
                      type='file'/>
                    </label>
                </Avatar>
                <Input 
                placeholder="Nome"
                type="text"
                icon={FiUser}
                />
                <Input 
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                />
                <Input 
                placeholder="Senha Atual"
                type="password"
                icon={FiLock}
                />
                <Input 
                placeholder="Senha Nova"
                type="password"
                icon={FiLock}
                />

                <Button title="Salvar"/>
            </Form>
        </Container>
    );
}