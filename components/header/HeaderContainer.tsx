import React from 'react'
import styled from 'styled-components'

import { Border } from '../UI/Border'
import { ScoreHeader } from './ScoreHeader'
import { TextHeader } from './TextHeader'

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const HeaderContainer = () => {
    return (
        <div style={{ paddingTop: "50px" }}>
            <Border padding="15px 25px" width='100%'>
                <Box>
                    <TextHeader />
                    <ScoreHeader />
                </Box>
            </Border>
        </div>
    )
}
