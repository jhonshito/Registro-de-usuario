
import { createContext, useState } from "react";

export const UseContext = createContext();

const UseProvider = (props) => {
    const [datosGlobal, setDatosGlobal,] = useState();
    const [datosPerfil, setDatosPerfil,] = useState();

    const local = ({data}) => {
        setDatosGlobal(data)
        // console.log(data.nombre)
        localStorage.setItem(data.correo, JSON.stringify(data))
        if(localStorage.length > 0){
           const estraer = JSON.parse(localStorage.getItem(data.correo))
           setDatosPerfil(estraer)
            // console.log(`el datos es ${estraer.correo}`)
        }
    }

    return (
        <UseContext.Provider value={{datosGlobal, setDatosGlobal, local, datosPerfil}}>
            {props.children}
        </UseContext.Provider>
    )
}

export default UseProvider