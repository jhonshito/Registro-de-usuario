import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { UseContext } from '../context/datos';

const Ingresar = () => {
    const {datosGlobal} = useContext(UseContext);

    const [valor, setValor] = useState({
        correo : '',
        contraseña : ''
    })
    console.log(datosGlobal)

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(datosGlobal)
        const traer = JSON.parse(localStorage.getItem(valor.correo))
        console.log(traer)
    }
  return (
    <div className='container mt-3'>
        <h1>Ingresar</h1>
        <div className='d-flex justify-content-center'>
        <div className="alert alert-primary fst-italic shadow w-50 pb-5 mt-5">
            <form onSubmit={handleSubmit}>
                <h2 className='text-center mb-3 fs-1 fst-italic'>Iniciar sesion</h2>
                <input
                    type="text"
                    className='form-control mb-3 fs-4 fst-italic' 
                    placeholder='Ingreasa tu correo'
                    name='correo'
                    onChange={(e) => setValor({...valor, correo : e.target.value})}
                />
                <input
                    type="text"
                    className='form-control mb-3 fs-4 fst-italic' 
                    placeholder='Ingreasa tu contraseña'
                    name='contraseña'
                    onChange={(e) => setValor({...valor, apellido : e.target.value})}
                />
                <button className="btn btn-primary w-100 mb-3 fs-4 fst-italic">Iniciar sesion</button>
                <div className="d-flex justify-content-center fs-4">
                    <p className='mx-3'>No tengo cuenta</p>
                    <Link to={'/'}>Registrarme</Link>
                </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Ingresar