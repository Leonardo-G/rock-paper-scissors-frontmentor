import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { GameContext } from '../../context/GameContext'
import { Text } from '../../styled/globals'
import { Hand } from './Hand'
import { handDatabase } from '../../database/hand';
import { IHand } from '../../interface/game';

const Box = styled.div`
    margin-top: 90px;
    display: flex;
    justify-content: space-around; 
    align-items: center;
    column-gap: 50px;
`

const BoxHand = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 70px;
`

const Results = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
`

const Button = styled.div`
    background: #fff;
    padding: 15px 60px;
    border-radius: 6px;
    cursor: pointer;
    p{
        color: hsl(349, 71%, 52%);
    }
`

export const InGame = () => {

    const { urlHand, hand, gameEnd, result, resetGame } = useContext( GameContext );
    const [houseHand, setHouseHand] = useState("paper");
    const [isEndGame, setIsEndGame] = useState(false);

    const housePicked = () => {
        let counter = 1;

        let id = setInterval(() => {
    
            if ( counter === 3 ) {
                counter = 0;
            }
    
            setHouseHand( handDatabase[ counter ].value )
            counter++;
        }, 250)

        setTimeout(() => {
            clearInterval(id);
            setIsEndGame( true );
        }, 2000);
    }

    useEffect(() => {
        housePicked()
    }, [])

    useEffect(() => {

        if ( hand && isEndGame ) {
            gameEnd( houseHand as IHand );
        }

    }, [ isEndGame ])

    return (
        <Box>
           <BoxHand>
                <Text 
                    size={ 26 }
                    letterS={ 1.8 }    
                >YOU PICKED</Text>
                <Hand
                    src={ urlHand! }
                    value={ hand! }
                    gradientBorder={ handDatabase.filter( c => c.value === hand )[0].gradientBorder }
                    shadow={ handDatabase.filter( c => c.value === hand )[0].shadow } 
                />
           </BoxHand>
           { 
                result &&   
                <Results>
                    <Text size={ 48 }>YOU { result.toLocaleUpperCase() }</Text>
                    <Button onClick={ resetGame }>
                        <Text letterS={ 1.6 }>PLAY AGAIN</Text>
                    </Button>
                </Results>
           }
           <BoxHand>
                <Text 
                    size={ 26 }
                    letterS={ 1.8 }    
                >THE HOUSE PICKED</Text>
                <Hand
                    src={ handDatabase.filter( c => c.value === houseHand )[0].src }
                    value={ handDatabase.filter( c => c.value === houseHand )[0].value }
                    gradientBorder={ handDatabase.filter( c => c.value === houseHand )[0].gradientBorder }
                    shadow={ handDatabase.filter( c => c.value === houseHand )[0].shadow } 
                />
           </BoxHand>
        </Box>
    )
}
