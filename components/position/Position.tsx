import React, { FC, ReactNode } from 'react';

import styled from 'styled-components';

const PositionAbs = styled.div`
    position: absolute;
    top: ${ ({ top }: { 
        width?: string; 
        top?: string; 
        left?: string; 
        right?: string;
        bottom?: string;
        translateBox?: string;
        height?: string;
        zIndex?: number;
        backColor?: string;
        radius?: string;
    }) => top ? top : "auto" };
    border-radius: ${ ({ radius }) => radius ? radius : "0px" };
    background: ${ ({ backColor }) => backColor ? backColor : "transparent" };
    width: ${ ({ width }) => width ? width : "fit-content" };
    height: ${ ({ height }) => height ? height : "fit-content" };
    left: ${ ({ left }) => left ? left : "auto" };
    right: ${ ({ right }) => right ? right : "auto" };
    bottom: ${ ({ bottom }) => bottom ? bottom : "auto" };
    translate: ${ ({ translateBox }) => translateBox ? translateBox : "none" };
    z-index: ${ ({ zIndex }) => zIndex ? zIndex : 0 };
`

interface Props {
    children: ReactNode;
    width?: string;
    height?: string;
    top?: string;
    left?: string;
    rigth?: string;
    bottom?: string;
    translateBox?: string;
    zIndex?: number;
    backColor?: string;
    radius?: string;
    event?: () => void;
}

export const Position: FC<Props> = ({ event, children, width, top, left, rigth, bottom, translateBox, height, zIndex, radius, backColor }) => {
    
    return (
        <PositionAbs 
            width={ width } 
            top={ top } 
            left={ left } 
            right={ rigth } 
            bottom={ bottom } 
            translateBox={ translateBox }
            height={ height }    
            zIndex={ zIndex }
            radius={ radius }
            backColor={ backColor }
            onClick={ event }
        >
            { children }
        </PositionAbs>
    )
}
