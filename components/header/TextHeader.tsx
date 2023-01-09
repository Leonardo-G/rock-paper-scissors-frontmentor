import React from 'react'
import styled from 'styled-components'
import { Text } from '../../styled/globals'

const Box = styled.div`
    display: flex;
    flex-direction: column;
`

export const TextHeader = () => {
    return (
        <Box>
            <Text 
                size={ 35 }
                width={ 30 }
            >ROCK PAPER SCISSORS</Text>
        </Box>
    )
}
