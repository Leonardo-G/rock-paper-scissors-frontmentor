import Head from 'next/head';
import React, { FC, ReactNode } from 'react'
import { Theme } from '../../styled/globals'

interface Props {
    children: ReactNode;
    title: string;
}

export const LayoutPage: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>Rock, Scissors, Paper</title>
            </Head>
            <Theme title={ title }>
                { children }
            </Theme>
        </>
    )
}
