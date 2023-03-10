import React, { FC, ReactNode, useEffect, useReducer } from 'react'
import { IHand, IHandInfo } from '../interface/game';
import { GameContext } from './GameContext';
import gameReducer from './gameReducer';

export interface IGameContext {
    inGame: boolean;
    hand: "paper" | "rock" | "scissors" | null;
    handComputer: "paper" | "rock" | "scissors" | null;
    result: "lose" | "win" | "draw" | null;
    urlHand: string | null;
    score: number;
    gameFinish: boolean;
}

const INITIA_STATE: IGameContext = {
    inGame: false,
    hand: null,
    handComputer: null,
    result: null,
    urlHand: null,
    score: 0,
    gameFinish: false
}

interface Props{
    children: ReactNode;
}

export const GameProvider: FC<Props> = ({ children }) => {
    
    const [state, dispatch] = useReducer( gameReducer, INITIA_STATE );

    useEffect(() => {
        if( localStorage.getItem("ScoreGame") ) {
            dispatch({ 
                type: "CHANGE SCORE",
                payload: Number(localStorage.getItem("ScoreGame"))
            })
        } else {
            localStorage.setItem( "ScoreGame", (0).toString() );
        }
    }, [])

    const changeInGame = ( hand: IHand, urlHand: string ) => {
        
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

    const gamePoint = (result: "win" | "lose" | "draw") => {
        
        if ( result === "draw" ) return;
        
        if ( result === "win" ) {

            localStorage.setItem( "ScoreGame", (state.score + 1).toString() )
            dispatch({ type: "WIN GAME" });
            return;
        }

        if ( result === "lose" ){
            
            localStorage.setItem( "ScoreGame", (state.score - 1).toString() )
            dispatch({ type: "LOSE GAME" });
            return;
        }
    }

    return (
        <GameContext.Provider value={{
            ...state,

            //methods
            changeInGame,
            gameEnd,
            resetGame,
            gamePoint
        }}>
            { children }
        </GameContext.Provider>
    )
}
