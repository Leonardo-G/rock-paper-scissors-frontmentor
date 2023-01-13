export type IHand = "rock" | "scissors" | "paper";

export interface IHandInfo {
    shadow: string;
    gradientBorder: string;
    src: string; 
    value: "paper" | "rock" | "scissors";
}