import React, { Dispatch, FC, SetStateAction } from 'react';

import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { ImageContainer } from '../image/ImageContainer';
import { Position } from '../position/Position';

import { Text } from '../../styled/globals';

const BoxShadow = styled.div`
    position: relative;
    background: #00000049;
    width: 100%;
    height: 100%;
`

const Flex = styled.div`
    display: flex;
    width: 100%;
    margin-top: 40px;
    padding: 0 30px;
    justify-content: space-between;
`

const BoxCenter = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

interface Props {
    setRulesActivated: Dispatch<SetStateAction<boolean>>
}

export const Rules: FC<Props> = ({ setRulesActivated }) => {
    return (
        <Position
            top='0%' 
            left='0%' 
            width='100%'
            height='100%'
            zIndex={ 99 }
        >   
            <BoxShadow>
                <Position 
                    top='50%' 
                    left='50%'
                    translateBox='-50% -50%'
                    backColor='#fff'
                    width='450px'
                    height='500px'
                    radius='20px'
                    responsive
                >
                    <Flex>
                        <Text color='hsl(229, 25%, 31%)' size={ 28 }>RULES</Text>
                        <FontAwesomeIcon 
                            icon={ faX } 
                            color="#3b43637d"
                            onClick={ () => setRulesActivated( false ) }    
                        />
                    </Flex>
                    <BoxCenter>
                        <ImageContainer 
                            src='/image-rules.svg'
                            width='80%'
                            heigth='90%'
                        />
                    </BoxCenter>
                </Position>
            </BoxShadow>
        </Position>
    )
}
