import { IHand } from "../interface/game";
import { IGameContext } from "./GameProvider";

type ActionTypes = 
    | { type: "IN_GAME", payload: { hand: IHand, urlHand: string } }

const gameReducer = ( state: IGameContext, action: ActionTypes ): IGameContext => {
    
    switch (action.type) {
        case "IN_GAME":
            
            return {
                ...state,
                inGame: true,
                ...action.payload
            }

        default:
            return state;
    }
} 

export default gameReducer;