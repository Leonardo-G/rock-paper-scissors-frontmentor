import { createContext } from 'react';

import { IHand, IHandInfo } from '../interface/game';

export interface ContextProps {
    inGame: boolean;
    hand: "paper" | "rock" | "scissors" | null;
    handComputer: "paper" | "rock" | "scissors" | null;
    result: "lose" | "win" | "draw" | null;
    urlHand: string | null;
    score: number;

    //methods
    changeInGame: ( hand: IHand, urlHand: string  ) => void;
    gameEnd: ( handComputer: IHand ) => void;
    resetGame: () => void;
    gamePoint: (result: "win" | "lose" | "draw") => void
};

export const GameContext = createContext({} as ContextProps);