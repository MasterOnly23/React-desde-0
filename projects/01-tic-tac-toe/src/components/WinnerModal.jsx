import { GameResult } from "../constants";
import { Square } from "./Square";

export function WinnerModal ({winner, resetGame}){
    if (winner === null) return  null;
    const winnerText = winner === GameResult.Draw ? "Draw" : 'Winner'
    return(
    <section className='winner'>
        <div className='text'>
        <h2>{
            winner === GameResult.Draw
            ? 'Draw'
            : winner === GameResult.X
            ? 'Winner'
            : 'Winner' 
        }
        </h2>

        <header className='win'>
        {winner && <Square>{winner}</Square>}
        </header>
        <footer>
        <button onClick={resetGame}>Restart</button>
        </footer>
        </div>
    </section>
    )
}