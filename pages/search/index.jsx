import { Container, HeaderContainer, HeaderImg, HeaderTitle, TitleContainer, Subtitle, TitleColored, Input } from "./style.js";
import Background from "../../assets/images/Background.png";
import Icon from "../../assets/images/Vector.png";

export default function Search() {
    return (
        <Container source={Background} resizeMode='cover'>
            <HeaderContainer>
                <HeaderImg source={Icon}/>
                <HeaderTitle>NativeWeather</HeaderTitle>
            </HeaderContainer>
            <TitleContainer>
                <HeaderTitle>
                Boas vindas ao <TitleColored>NativeWeather</TitleColored>
                </HeaderTitle>
            </TitleContainer>
            <Subtitle>Escolha um local para ver a previsão do tempo</Subtitle>
            <Input placeholder="Digite aqui"></Input>
        </Container>
    )
}