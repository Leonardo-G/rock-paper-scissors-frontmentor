import { LayoutPage } from "../components/layout/LayoutPage";
import { Position } from "../components/position/Position";
import { Border } from "../components/UI/Border";
import { Text } from "../styled/globals";

export default function Home() {
  return (
    <LayoutPage title="ROCK PAPER, SCISSORS">
      <Position bottom="25px" rigth="25px">
        <Border padding="5px 25px" pointer>
          <Text size={ 18 }>Rules</Text>
        </Border>
      </Position>
    </LayoutPage>
  )
}
