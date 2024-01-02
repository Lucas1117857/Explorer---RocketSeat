import { Container, Links, Content } from "./styles";

import { Header } from "../../componets/Header";
import { Button } from "../../componets/button";
import { Section } from "../../componets/section";
import { Tag } from "../../componets/tag";
import { ButtonText } from "../../componets/ButtonText";


export function Details() {
  return (
    <Container>
      <Header />


      <main>
        <Content>
      <ButtonText title="Excluir Nota"/>

      <h1>
        Introdução ao React
      </h1>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, officiis veritatis aut eum pariatur,
        perspiciatis autem temporibus, consequatur tempore quo voluptates harum.
        Obcaecati, libero iure. Amet quidem sed ut officiis? 
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Voluptas pariatur excepturi beatae accusamus nesciunt nihil sapiente quia, 
        tempora labore dicta ipsa fugiat optio aspernatur iure magni reprehenderit quisquam. Unde, provident.
         </p>

      <Section title="Links Uteis">
        <Links>
          <li>
            <a href="https://discord.gg/kVHFzmPS">Giggle</a>
            <br />
            <a href="https://discord.gg/38FJfPCk">PlayStart</a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express"/>
        <Tag title="nodejs"/>
      </Section>


      <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  )
}