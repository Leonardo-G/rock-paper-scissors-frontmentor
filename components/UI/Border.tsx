import React, { FC, ReactNode } from 'react'
import styled from 'styled-components';

interface Props {
    children: ReactNode;
    padding?: string;
    pointer?: boolean;
}

const BorderStyle = styled.div`
    padding: ${ ({ padding }: { padding?: string, pointer?: boolean }) => padding ? padding : "0px" };
    background: transparent;
    border: 2px solid hsl(217, 16%, 45%);
    border-radius: 6px;
    width: fit-content;
    cursor: ${ ({ pointer }) => pointer ? "pointer" : "auto" };
`

export const Border: FC<Props> = ({ children, padding, pointer = false }) => {
    return (
        <BorderStyle padding={ padding } pointer={ pointer }>
            { children }
        </BorderStyle>
    )
}
