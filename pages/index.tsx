import { useState } from "react";
import { ContainerGame } from "../components/game/ContainerGame";
import { HeaderContainer } from "../components/header/HeaderContainer";
import { LayoutPage } from "../components/layout/LayoutPage";
import { Position } from "../components/position/Position";
import { Rules } from "../components/rules/Rules";
import { Border } from "../components/UI/Border";

import { Container, Text } from "../styled/globals";

export default function Home() {

  const [rulesActivated, setRulesActivated] = useState(false);

  const handleChangeRules = () => {
    setRulesActivated( true );
  }

  return (
    <LayoutPage title="ROCK PAPER, SCISSORS">
      <Container>
        <Container minWidth={ 800 }>
          <HeaderContainer />
          <ContainerGame />
        </Container>
      </Container>
      <Position bottom="25px" rigth="25px">
        <Border 
          padding="10px 35px" 
          pointer 
          event={ handleChangeRules }
        >
          <Text size={ 18 } letterS={ 2 }>Rules</Text>
        </Border>
      </Position>
      {
        rulesActivated &&
        <Rules 
          setRulesActivated={ setRulesActivated }  
        />
      }
    </LayoutPage>
  )
}
