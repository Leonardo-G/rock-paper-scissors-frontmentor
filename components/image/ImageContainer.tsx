import Image from 'next/image';
import React, { FC } from 'react'
import styled from 'styled-components';

interface Props {
    heigth?: string;
    width?: string;
    src: string;
}

const Box = styled.div`
    position: relative;
    width: ${ ({ width } : { width?: string, height?: string }) => width ? width : "100%" };
    height: ${ ({ height }) => height ? height : "200px" };
    overflow: hidden;

    @media (max-width: 720px){
        height: ${ ({ height }) => height ? `${( Number( height.split("px")[0] ) * 0.5)}px` : "100px" };;
    }


`

export const ImageContainer: FC<Props> = ({ width, heigth, src }) => {
    return (
        <Box width={ width } height={ heigth }>
            <Image 
                src={ src }
                alt="Imagen"
                fill
                style={{
                    objectFit: "contain"
                }}
            />
        </Box>
    )
}
