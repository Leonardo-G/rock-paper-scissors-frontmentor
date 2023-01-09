import React, { FC, ReactNode } from 'react'
import styled from 'styled-components';

interface Props {
    children: ReactNode;
    padding?: string;
    pointer?: boolean;
    width?: string;
    margin?: string;
}

const BorderStyle = styled.div`
    padding: ${ ({ padding }: { padding?: string, pointer?: boolean, width?: string, margin?: string }) => padding ? padding : "0px" };
    background: transparent;
    border: 2px solid hsl(217, 16%, 45%);
    border-radius: 10px;
    width: ${ ({ width }) => width ? width : "fit-content" };
    margin: ${ ({ margin }) => margin ? margin : "0px" };
    cursor: ${ ({ pointer }) => pointer ? "pointer" : "auto" };
`

export const Border: FC<Props> = ({ width, children, padding, pointer = false, margin }) => {
    return (
        <BorderStyle 
            padding={ padding } 
            pointer={ pointer } 
            width={ width }
            margin={ margin }    
        >
            { children }
        </BorderStyle>
    )
}
