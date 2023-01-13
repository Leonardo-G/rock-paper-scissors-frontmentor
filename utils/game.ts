import { IHand } from '../interface/game';

export const resultGame = ( hand: IHand, handComputer: IHand ) => {
    
    let result = "draw"; 

    if ( hand === handComputer ) return result;
    
    if ( hand === "paper" ) {

        if ( handComputer === "rock" ) {
            result = "win";
        }

        if ( handComputer === "scissors" ) {
            result = "lose";
        }
    } 

    if ( hand === "rock" ) {
        if ( handComputer === "paper" ) {
            result = "lose";
        }

        if ( handComputer === "scissors" ) {
            result = "win";
        }
    }

    if ( hand === "scissors" ) {
        if ( handComputer === "paper" ) {
            result = "win";
        }

        if ( handComputer === "rock" ) {
            result = "lose";
        }
    }

    return result;

}