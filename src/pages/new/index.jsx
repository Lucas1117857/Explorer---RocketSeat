import { InputText } from '../../componets/InputText';
import { NoteItem } from '../../componets/NoteItem';
import { Section } from '../../componets/section';
import { Header } from '../../componets/Header';
import { Button } from '../../componets/button';
import { Input } from '../../componets/Input';
import { Link } from 'react-router-dom';

import { Container, Form } from "./styles";

export function New(){
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input
                    placeholder="Titulo" />
                    <InputText placeholder="Texto"/>
                    
                    <Section title="Links Úteis">
                        <NoteItem value="https://playstart.website/"/>
                        <NoteItem isNew placeholder="Novo Link"/>
                    </Section>

                    <Section title="Marcadores">
                        <div className="Tags">
                         <NoteItem value="React"/>
                         <NoteItem isNew placeholder="Novo Tag"/>
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}