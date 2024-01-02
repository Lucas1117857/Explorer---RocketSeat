import { Container } from "./styles";

export function InputText({ value, ...rest}) {
    return (
        <Container {...rest}>
      {value}
    </Container>
    );
}