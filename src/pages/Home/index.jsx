import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Note } from '../../componets/Note';
import { Header } from '../../componets/Header';
import { Input } from '../../componets/Input';
import { ButtonText } from '../../componets/ButtonText';
import { Section } from '../../componets/section';


export function Home() {
    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title="Todos" isActive /></li>
                <li><ButtonText title="React" /></li>
                <li><ButtonText title="Nodejs" /></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={FiSearch}/>
            </Search>

            <Content>
                <Section title="Minhas Notas">
                    <Note data={{
                        title: 'React',
                        tags: [
                            {id: '1', name: 'react'},
                            {id: '2', name: 'Rocketseats'}
                        ]
                    }}/>
                    <Note data={{
                        title: 'Giggle',
                        tags: [
                            {id: '1', name: 'Vendas'},
                            {id: '2', name: 'discord'}
                        ]
                    }}/>
                    <Note data={{
                        title: 'PlayStart',
                        tags: [
                            {id: '1', name: 'melhor que a semen store'},
                            {id: '2', name: 'Vendas Automaticas'}
                        ]
                    }}/>   
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar Nota
            </NewNote>
        </Container>
    )
}