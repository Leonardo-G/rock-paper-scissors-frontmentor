import React, { FC, ReactNode } from 'react'
import styled from 'styled-components';

interface Props {
    children: ReactNode;
    padding?: string;
}

const BorderStyle = styled.div`
    padding: ${ ({ padding }: { padding?: string }) => padding ? padding : "0px" };
    background: transparent;
    border: 2px solid hsl(217, 16%, 45%);
    border-radius: 6px;
    width: fit-content;
`

export const Border: FC<Props> = ({ children, padding }) => {
    return (
        <BorderStyle padding={ padding }>
            { children }
        </BorderStyle>
    )
}
