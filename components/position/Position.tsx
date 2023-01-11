import React, { FC, ReactNode } from 'react'
import styled from 'styled-components';


const PositionAbs = styled.div`
    position: absolute;
    top: ${ ({ top, left, right, bottom, width }: { width?: string; top?: string, left?: string, right?: string, bottom?: string, translateBox?: string }) => top ? top : "auto" };
    width: ${ ({ width }) => width ? width : "fit-content" };
    left: ${ ({ left }) => left ? left : "auto" };
    right: ${ ({ right }) => right ? right : "auto" };
    bottom: ${ ({ bottom }) => bottom ? bottom : "auto" };
    translate: ${ ({ translateBox }) => translateBox ? translateBox : "none" };
`

interface Props {
    children: ReactNode;
    width?: string;
    top?: string;
    left?: string;
    rigth?: string;
    bottom?: string;
    translateBox?: string;
}

export const Position: FC<Props> = ({ children, width, top, left, rigth, bottom, translateBox }) => {
    return (
        <PositionAbs width={ width } top={ top } left={ left } right={ rigth } bottom={ bottom } translateBox={ translateBox }>
            { children }
        </PositionAbs>
    )
}
