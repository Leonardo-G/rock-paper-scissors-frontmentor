import React, { FC, useContext } from 'react'

import styled from 'styled-components'

import { ImageContainer } from '../image/ImageContainer'
import { Position } from '../position/Position'

import { GameContext } from '../../context/GameContext'
import { IHand } from '../../interface/game'

const Border = styled.div`
    position: relative;
    width: 280px;
    height: 280px;
    background: ${ ({ gradientBorder }: { gradientBorder: string, shadow: string }) => gradientBorder && `linear-gradient( ${ gradientBorder } )` } ;
    z-index: 19;
    border-radius: 50%;
    box-shadow: 0px 10px 0px 0px ${ ({ shadow }) => shadow };
`

const Box = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
    background: #fff;
    padding: 50px;
    border-radius: 50%;
    height: 225px;
    width: 225px;
    box-shadow: inset 0px 9px 5px 0px #a0a0a0a3;
    cursor: pointer;
`

interface Props {
    gradientBorder: string;
    shadow: string;
    src: string;
    value: IHand;
}

export const Hand:FC<Props> = ({ gradientBorder, shadow, src, value }) => {

    const { changeInGame } = useContext( GameContext );

    return (
        <Border 
            gradientBorder={ gradientBorder } 
            shadow={ shadow }
            onClick={ () => changeInGame( value, src ) }
        >
            <Box>
                <Position width='100%' top='50%' left='50%' translateBox='-50% -50%'>
                    <ImageContainer 
                        src={ src }
                        heigth='135px'
                    />
                </Position>
            </Box>
        </Border>
    )
}
