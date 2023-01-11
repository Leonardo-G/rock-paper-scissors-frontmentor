import { ContainerGame } from "../components/game/ContainerGame";
import { HeaderContainer } from "../components/header/HeaderContainer";
import { LayoutPage } from "../components/layout/LayoutPage";
import { Position } from "../components/position/Position";
import { Border } from "../components/UI/Border";
import { Container, Text } from "../styled/globals";

export default function Home() {
  return (
    <LayoutPage title="ROCK PAPER, SCISSORS">
      <Container>
        <Container minWidth={ 800 }>
          <HeaderContainer />
          <ContainerGame />
        </Container>
      </Container>
      <Position bottom="25px" rigth="25px">
        <Border padding="5px 25px" pointer>
          <Text size={ 18 }>Rules</Text>
        </Border>
      </Position>
    </LayoutPage>
  )
}
