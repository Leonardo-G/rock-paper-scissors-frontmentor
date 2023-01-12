import React, { useContext } from 'react'
import styled from 'styled-components'
import { GameContext } from '../../context/GameContext'
import { Text } from '../../styled/globals'
import { Hand } from './Hand'

const Box = styled.div`
    margin-top: 90px;
    display: flex;
`

const BoxHand = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 70px;
`

export const InGame = () => {

    const { urlHand, hand } = useContext( GameContext );

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
                    gradientBorder='hsl(230, 89%, 62%), hsl(230, 89%, 65%)'
                    shadow='#4865f4a0'  
                />
           </BoxHand>
        </Box>
    )
}
