import {useEffet} from "react"
const Componet = () => {
    useEffet(CodigoAEjecutar, listaDeDependecias);
    // el codigo a ejectar se ejecutara por los menos una vez, si la lista de dependecias esa vacia, se ejecuta
    // cada vez que se renderiza el componente (lista de dependecias debe ser un array)
    // con un array de dependecias vacio le decimo que solo se renderice una vez
}