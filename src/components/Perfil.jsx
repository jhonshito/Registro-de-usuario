
import React, { useContext } from 'react'
import '../styles/pefil.css'
import { UseContext } from '../context/datos'

const Perfil = () => {

    const {datosPerfil} = useContext(UseContext)
    console.log(datosPerfil)
  return (
    <div>
      <div className='contenedor shadow'>
        <div className='foto'>
          <img
            src="https://us.123rf.com/450wm/bowie15/bowie151110/bowie15111000087/10916933-handsome-young-man.jpg?ver=6"
            alt="" 
            className='shadow'
          />
        </div>
          <h1 className='nombre'>nombre del usuario</h1>
        <div className="datos">
          <div className="data">
            <h2>correo del usuario</h2>
            <h2>el apellido del usuario</h2>
          </div>
          <p className='descripcion'>descripcion del usuario jhgjhjghfjgfjhdgjhkfhjgfhgfjgkjgfhgjfghj</p>
          <div className="descripcionInput">
            <input
              type="text" 
              placeholder='Ingresa descripcion'
              className='input'
            />
            <button className='boton'>Agregar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfil
