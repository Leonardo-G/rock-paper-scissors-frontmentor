import { LayoutPage } from "../components/layout/LayoutPage";
import { Border } from "../components/UI/Border";
import { Text } from "../styled/globals";

export default function Home() {
  return (
    <LayoutPage title="ROCK PAPER, SCISSORS">
      <Border padding="5px 25px">
        <Text size={ 18 }>Rules</Text>
      </Border>
    </LayoutPage>
  )
}
