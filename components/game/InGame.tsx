import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { GameContext } from '../../context/GameContext'
import { Text } from '../../styled/globals'
import { Hand } from './Hand'
import { handDatabase } from '../../database/hand';

const Box = styled.div`
    margin-top: 90px;
    display: flex;
    justify-content: space-between; 
`

const BoxHand = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 70px;
`

export const InGame = () => {

    const { urlHand, hand } = useContext( GameContext );
    const [houseHand, setHouseHand] = useState("paper");

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
        }, 2000);
    }

    useEffect(() => {
        housePicked()
    }, [])

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
