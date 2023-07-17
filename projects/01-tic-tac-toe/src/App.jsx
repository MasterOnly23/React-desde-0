import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS, GameResult} from './constants'
import { checkWinner } from './logic/board'
import { WinnerModal } from './components/WinnerModal'


function App() {

  // modificamos para leer la partida guardada
  const [board, setBoard] = useState(() => {
    const boardFormStorage = window.localStorage.getItem('board') //recuperamos el local storage dentro de la funcion del estado porque hacerlo fuera en el cuerpo hace que se ejecute sin sentido en cada renderizado
    return boardFormStorage ? JSON.parse(boardFormStorage) : Array(9).fill(null) }) //tablero de juego

  const [turn, setTurn] = useState(()=>{
    const turnFormStorage = window.localStorage.getItem('turn')
    return turnFormStorage ? JSON.parse(turnFormStorage) : TURNS.X }) // estado del turn
  const [winner, setWinner] = useState(null) // null que no hay ganador y con GameResult cambimos el estado de los ganadores

 

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    // nos aseguramos que al resetear el juego se limpie el localStorage
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null) // si todos los squares (posiciones) son distintos a null termna el juego y da un empate
  }

  const checkStartGame = (newBoard) => {
    return newBoard.every((square) => square === null)
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
    //guardamos la partida aqui, despues del cambio de turno
    window.localStorage.setItem('board', JSON.stringify(newBoard)) // con el JSON.stringify le decimos que lo guarde como string pero que luego podamos recuperar el array
    window.localStorage.setItem('turn', JSON.stringify(newTurn)) 

    // revisar ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
      }
      // chequear que el juego termino 
      else if (checkEndGame(newBoard)) {
        setWinner(GameResult.Draw)
      }
    }

    const changeTurn = () =>{
      if (board.every(square => square === null)){ // se verifica si todo el board es null para cambiar el turn, si no son todos null no se cambia
        setTurn(turn === TURNS.X? TURNS.O : TURNS.X)
      }else {
        alert("No se puede cambiar el turno si hay una partida iniciada")
      }
    }

  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <section className='game'>
          {
             board.map((_, index) =>{ //el _ se refiere al square, lo que hay dentro
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
         {/*elegir turno*/}
         <section className='controls'>
          <button onClick={changeTurn}>Change Turn</button>
        </section> 

       <WinnerModal winner={winner} resetGame={resetGame} GameResult={GameResult} />

        
      </main>
    </>
  )
}

export default App
