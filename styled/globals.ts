import styled from "styled-components";

export const Theme = styled.div`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    background: linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
    overflow-x: hidden;
`

export const Text = styled.p`
    font-size: ${ ({ size }: { bold?: boolean, size?: number, letterS?: number, width?: number, color?: string }) => size ? `${size}px` : "16px" };
    letter-spacing: ${ ({ letterS }) => letterS ? `${letterS}px` : 0 };
    color: ${ ({ color }) => color ? color : "#fff" };
    width: ${ ({ width }) => width ? `${ width }px` : "fit-content" };
    font-weight: ${ ({ bold }) => bold ? 700 : 600 };
    line-height: 0.8;

    @media (max-width: 920px){
        font-size: ${ ({ size } ) => size ? `${size * 0.8}px` : "14px"};
    }

    @media (max-width: 520px) {
        font-size: ${ ({ size } ) => size && size * 0.5 > 12 ? `${size * 0.5}px` : "12px"};
    }
`

export const Container = styled.div`
    width: ${ ({ minWidth } : { minWidth?: number }) => minWidth ? `min( ${ minWidth }px, 95%)` : "min( 1160px, 95% )" }; 
    margin: 0 auto;
`