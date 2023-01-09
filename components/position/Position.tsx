import React, { FC, ReactNode } from 'react'
import styled from 'styled-components';


const PositionAbs = styled.div`
    width: fit-content;
    position: absolute;
    top: ${ ({ top, left, right, bottom }: { top?: string, left?: string, right?: string, bottom?: string, translateBox?: string }) => top ? top : "auto" };
    left: ${ ({ left }) => left ? left : "auto" };
    right: ${ ({ right }) => right ? right : "auto" };
    bottom: ${ ({ bottom }) => bottom ? bottom : "auto" };
    translate: ${ ({ translateBox }) => translateBox ? translateBox : "none" };
`

interface Props {
    children: ReactNode;
    top?: string;
    left?: string;
    rigth?: string;
    bottom?: string;
    translateBox?: string;
}

export const Position: FC<Props> = ({ children, top, left, rigth, bottom, translateBox }) => {
    return (
        <PositionAbs top={ top } left={ left } right={ rigth } bottom={ bottom } translateBox={ translateBox }>
            { children }
        </PositionAbs>
    )
}
