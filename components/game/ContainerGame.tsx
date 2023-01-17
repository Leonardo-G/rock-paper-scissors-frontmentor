import React from 'react'
import styled from 'styled-components'
import { Position } from '../position/Position'
import { Hand } from './Hand'
import { handDatabase } from '../../database/hand';

const Game = styled.div`
    margin-top: 75px;
`

const Box = styled.div`
    display: flex;
    align-items: space-between;
    justify-content: center;
    row-gap: 50px;
    column-gap: 100px;

    @media (max-width: 620px){
        column-gap: 50px;
    }
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
                        gradientBorder={ handDatabase[0].gradientBorder }
                        shadow={ handDatabase[0].shadow }
                        src={ handDatabase[0].src }
                        value={ handDatabase[0].value }
                    />
                    <Position top='50%' rigth='-50%'>
                        <Line></Line>
                    </Position>
                </BoxHand>
                <BoxHand>
                    <Hand 
                        gradientBorder={ handDatabase[1].gradientBorder }
                        shadow={ handDatabase[1].shadow }
                        src={ handDatabase[1].src }
                        value={ handDatabase[1].value }
                    />
                    <Position bottom='0%' rigth='30%'>
                        <Line rotate={ 125 }></Line>
                    </Position>
                </BoxHand>
            </Box>
            <SecondBox>
                <Hand 
                    gradientBorder={ handDatabase[2].gradientBorder }
                    shadow={ handDatabase[2].shadow }
                    src={ handDatabase[2].src }
                    value={ handDatabase[2].value }
                />
                <Position top='0%' rigth='50%'>
                    <Line rotate={ 55 }></Line>
                </Position>
            </SecondBox>
        </Game>
    )
}
