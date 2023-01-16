import { IHand } from "../interface/game";
import { resultGame } from "../utils/game";
import { IGameContext } from "./GameProvider";

type ActionTypes = 
    | { type: "IN_GAME", payload: { hand: IHand, urlHand: string } }
    | { type: "GAME_END", payload: { handComputer: IHand } }
    | { type: "RESET GAME" }
    | { type: "WIN GAME" }
    | { type: "LOSE GAME" }

const gameReducer = ( state: IGameContext, action: ActionTypes ): IGameContext => {
    
    switch (action.type) {
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
                handComputer: action.payload.handComputer
            }

        case "RESET GAME":
            return {
                ...state,
                inGame: false,
                hand: null,
                handComputer: null,
                result: null,
                urlHand: null
            }

        case "WIN GAME":
            return {
                ...state,
                score: state.score++
            }

        default:
            return state;
    }
} 

export default gameReducer;