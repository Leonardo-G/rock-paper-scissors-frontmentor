import { IHand } from "../interface/game";
import { resultGame } from "../utils/game";
import { IGameContext } from "./GameProvider";

type ActionTypes = 
    | { type: "CHANGE SCORE", payload: number }
    | { type: "IN_GAME", payload: { hand: IHand, urlHand: string } }
    | { type: "GAME_END", payload: { handComputer: IHand } }
    | { type: "RESET GAME" }
    | { type: "WIN GAME" }
    | { type: "LOSE GAME" }

const gameReducer = ( state: IGameContext, action: ActionTypes ): IGameContext => {
    
    switch (action.type) {

        case "CHANGE SCORE":
            return {
                ...state,
                score: action.payload
            }

        case "IN_GAME":
            
            return {
                ...state,
                inGame: true,
                ...action.payload
            }

        case "GAME_END":

            return {
                ...state,
                inGame: false,
                result: resultGame( state.hand!, action.payload.handComputer ) as "lose" | "win" | "draw",
                handComputer: action.payload.handComputer,
                gameFinish: true
            }

        case "RESET GAME":
            return {
                ...state,
                inGame: false,
                hand: null,
                handComputer: null,
                result: null,
                urlHand: null,
                gameFinish: false
            }

        case "WIN GAME":
            return {
                ...state,
                score: state.score + 1
            }

        case "LOSE GAME":
            return {
                ...state,
                score: state.score - 1
            }

        default:
            return state;
    }
} 

export default gameReducer;