import { IHandInfo } from "../interface/game";

export const handDatabase: IHandInfo[] = [
    {
        gradientBorder: 'hsl(230, 89%, 62%), hsl(230, 89%, 65%)',
        shadow: '#4865f4a0',
        src: '/icon-paper.svg' ,
        value: "paper",
    },
    {
        gradientBorder: 'hsl(39, 89%, 49%), hsl(40, 84%, 53%)',
        shadow: '#eca922a0',
        src: '/icon-scissors.svg',
        value: "scissors"
    },
    {
        gradientBorder: 'hsl(349, 71%, 52%), hsl(349, 70%, 56%)',
        shadow: '#dd405da0',
        src: '/icon-rock.svg',
        value: "rock"
    }
]