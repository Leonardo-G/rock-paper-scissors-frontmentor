import React, { useContext } from 'react'
import styled from 'styled-components'
import { GameContext } from '../../context/GameContext'
import { Text } from '../../styled/globals'

const Box = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 30px;
    border-radius: 8px;
    justify-content: space-around;
`

export const ScoreHeader = () => {

    const { score } = useContext( GameContext );

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
        </Box>
    )
}
