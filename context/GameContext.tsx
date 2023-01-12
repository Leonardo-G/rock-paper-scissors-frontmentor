import { createContext } from 'react';
import { IHand } from '../interface/game';

export interface ContextProps {
    inGame: boolean;
    hand: "paper" | "rock" | "scissors" | null;
    handComputer: "paper" | "rock" | "scissors" | null;
    result: "loss" | "win" | "draw" | null;
    urlHand: string | null;

    //methods
    changeInGame: ( hand: IHand, urlHand: string  ) => void;
};

export const GameContext = createContext({} as ContextProps);