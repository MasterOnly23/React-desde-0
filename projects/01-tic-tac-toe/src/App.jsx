import { useState } from 'react'
import './App.css'

const TURNS = {
  X : 'X',
  O : 'O'
}

const GameResult = {
  X : 'X wins',
  O : 'O wins',
  Draw : 'Draw',
}



const Square = ({children, isSelected , updateBoard, index}) => {

  const className = `square ${isSelected ? 'is-selected' :''}`

  const handleClick = () =>{
    updateBoard(index);
  }

  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )

}

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function App() {

  const [board, setBoard] = useState(Array(9).fill(null)) //tablero de juego
  const [turn, setTurn] = useState(TURNS.X) // estado del turn
  const [winner, setWinner] = useState(null) // null que no hay ganador y con GameResult cambimos el estado de los ganadores

  const checkWinner =(boardToCheck) => {
    for (const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]){
        // setWinner(GameResult.boardToCheck[a])
        return boardToCheck[a]
      }
    }
    //no hay ganador
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null) // si todos los squares (posiciones) son distintos a null termna el juego y da un empate
  }

  const updateBoard = (index) => {
    // no actualizamos la posicion si ya tiene algo
    if (board[index] || winner) return

    const newBoard = [...board] // "Colon del board"
    newBoard[index] = turn // en el indice del nuevo board que corresponde le asignamos el turno actual 
    setBoard(newBoard) // actualizamos el tablero
    // Cambiamos el turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // revisar ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      }
      // chequear que el juego termino 
      else if (checkEndGame(newBoard)) {
        setWinner(GameResult.Draw)
      }
    }

  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <section className='game'>
          {
            board.map((_, index) =>{
              return (
                <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
                >
                  {board[index]}
                </Square>

              )
            })
          }
        </section>
        <section className='turn'>
                  <Square isSelected={turn === TURNS.X}>
                    {TURNS.X}
                  </Square>
                  <Square isSelected={turn === TURNS.O}>
                    {TURNS.O}
                  </Square>
        </section>
        <button onClick={resetGame}>Restart</button>
        {/* elegir turno
         <section className='controls'>
          <button onClick={() => setTurn(TURNS.X)}>X</button>
          <button onClick={() => setTurn(TURNS.O)}>O</button>
        </section> */}

        {
          winner !== null && (
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

        
      </main>
    </>
  )
}

export default App
