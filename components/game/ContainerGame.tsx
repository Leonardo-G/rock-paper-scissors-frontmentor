import React from 'react'
import styled from 'styled-components'
import { Position } from '../position/Position'
import { Hand } from './Hand'

const Game = styled.div`
    margin-top: 75px;
`

const Box = styled.div`
    display: flex;
    align-items: space-between;
    justify-content: center;
    row-gap: 50px;
    column-gap: 100px;
`

const BoxHand = styled.div`
    position: relative;
`

const SecondBox = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`

const Line = styled.div`
    width: 200px; 
    height: 20px;
    background: #050d31c5;
    transform: ${ ({ rotate }: { rotate?: number }) => rotate ? `rotate(${ rotate }deg)` : "none" };
`

export const ContainerGame = () => {
    return (
        <Game>
            <Box>
                <BoxHand>
                    <Hand 
                        gradientBorder='hsl(230, 89%, 62%), hsl(230, 89%, 65%)'
                        shadow='#4865f4a0'   
                        src='/icon-paper.svg' 
                        value="paper"
                    />
                    <Position top='50%' rigth='-50%'>
                        <Line></Line>
                    </Position>
                </BoxHand>
                <BoxHand>
                    <Hand 
                        gradientBorder='hsl(39, 89%, 49%), hsl(40, 84%, 53%)'
                        shadow='#eca922a0'
                        src='/icon-scissors.svg'
                        value="scissors" 
                    />
                    <Position bottom='0%' rigth='30%'>
                        <Line rotate={ 125 }></Line>
                    </Position>
                </BoxHand>
            </Box>
            <SecondBox>
                <Hand 
                    gradientBorder='hsl(349, 71%, 52%), hsl(349, 70%, 56%)'
                    shadow='#dd405da0'
                    src='/icon-rock.svg'
                    value="rock" 
                />
                <Position top='0%' rigth='50%'>
                    <Line rotate={ 55 }></Line>
                </Position>
            </SecondBox>
        </Game>
    )
}
