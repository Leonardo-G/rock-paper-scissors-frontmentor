import React, { useContext } from 'react'
import styled from 'styled-components'
import { GameContext } from '../../context/GameContext'
import { Text } from '../../styled/globals'

const Box = styled.div`
    position: relative;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 30px;
    border-radius: 8px;
    justify-content: space-around;
`

const BoxPoint = styled.div`
    position: absolute;
    top: 150%;
    animation-name: scoreHeader;
    animation-delay: 0s;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;

    @keyframes scoreHeader {
        0% { top: 150% }
        100% { top: 50%; opacity: 0; }
    }
`

export const ScoreHeader = () => {

    const { score, gameFinish, result } = useContext( GameContext );

    return (
        <Box>
            <Text 
                color='hsl(229, 64%, 46%)'
                size={ 15 }  
                letterS={ 1.5 }  
            >Score</Text>
            <Text 
                color='hsl(229, 25%, 31%)'
                size={ 46 }
                bold
            >{ score }</Text>
            {
                gameFinish && result === "win" &&
                <BoxPoint>
                    <Text color='green' size={ 26 }>+ 1</Text>
                </BoxPoint>
            }
            {
                gameFinish && result === "lose" &&
                <BoxPoint>
                    <Text color='red' size={ 26 }>- 1</Text>
                </BoxPoint>
            }
        </Box>
    )
}
