import React, { FC, ReactNode, useReducer } from 'react'
import { IHand, IHandInfo } from '../interface/game';
import { GameContext } from './GameContext';
import gameReducer from './gameReducer';

export interface IGameContext {
    inGame: boolean;
    hand: "paper" | "rock" | "scissors" | null;
    handComputer: "paper" | "rock" | "scissors" | null;
    result: "lose" | "win" | "draw" | null;
    urlHand: string | null;
}

const INITIA_STATE: IGameContext = {
    inGame: false,
    hand: null,
    handComputer: null,
    result: null,
    urlHand: null
}

interface Props{
    children: ReactNode;
}

export const GameProvider: FC<Props> = ({ children }) => {
    
    const [state, dispatch] = useReducer( gameReducer, INITIA_STATE );

    const changeInGame = ( hand: IHand, urlHand: string ) => {
        localStorage.setItem("hand", hand);
        
        dispatch({
            type: "IN_GAME",
            payload: {
                hand,
                urlHand
            },
        })
    }

    const gameEnd = ( handComputer: IHand ) => {
        dispatch({
            type: "GAME_END",
            payload: {
                handComputer
            }
        })
    }   

    const resetGame = () => {
        dispatch({
            type: "RESET GAME"
        })
    }

    return (
        <GameContext.Provider value={{
            ...state,

            //methods
            changeInGame,
            gameEnd,
            resetGame
        }}>
            { children }
        </GameContext.Provider>
    )
}
