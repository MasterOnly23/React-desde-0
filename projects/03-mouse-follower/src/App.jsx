import { useEffect, useState } from "react"

function App() {
  const [enable, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', {clientX, clientY})
      setPosition({ x: clientX, y: clientY })
    }
    if (enable) {
    window.addEventListener('pointermove', handleMove)
    } 
    return () => { // cuando se ejecuta? => cuando se borra el componente o cuando cambia la dependecia
          window.removeEventListener('pointermove', handleMove)
        }
  }, [enable])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enable)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enable])

  return (
    <>
      <h2>Mouse Follower</h2>
      <div style={{
        display: enable ? 'block' : 'none',
        position: "absolute",
        top: -20,
        left: -20,
        width: 40,
        height: 40,
        backgroundColor: "#09f",
        borderRadius: '50%',
        pointerEvents: "none",
        opacity: 0.8,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}></div>
      <button onClick={() => setEnabled(!enable)}>
        {enable ? 'Desactivar' : 'Activar'} Seguir Puntero</button>
    </>
  )
}

export default App
