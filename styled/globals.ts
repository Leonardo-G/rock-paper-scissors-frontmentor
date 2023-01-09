import styled from "styled-components";

export const Theme = styled.div`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    background: linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
`

export const Text = styled.p`
    font-size: ${ ({ size }: { size?: number, letterS?: number }) => size ? `${size}px` : "16px" };
    letter-spacing: ${ ({ letterS }) => letterS ? letterS : 0 };
`