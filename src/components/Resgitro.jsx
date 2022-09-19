import { useContext, useState } from "react"
import { Link, useNavigate} from 'react-router-dom'
import { UseContext } from "../context/datos";

const Resgitro = () => {
    const { local } = useContext(UseContext);
    const navigate = useNavigate()
    const [data, setData] = useState({
        nombre : '',
        apellido : '',
        correo : '',
        contraseña : ''
    });

    const handleSubmit = (a) => {
        a.preventDefault();
        navigate('/perfil')
        local({data}) 
    }

  return (
    <div className="d-flex justify-content-center">
        <div className="alert alert-success shadow fst-italic w-50 py-5">
            <h1 className="text-center mb-3">Formulario de Registro</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control mb-3 fs-4 fst-italic"
                    placeholder="Ingresa tu nombre"
                    name="nombre"
                    onChange={(e) => setData({ ...data, nombre : e.target.value})}
                />
                <input
                    type="text"
                    className="form-control mb-3 fs-4 fst-italic"
                    placeholder="Ingresa tu apellido"
                    name="apellido"
                    onChange={(e) => setData({ ...data, apellido : e.target.value})} 
                />
                <input 
                    type="text" 
                    className="form-control mb-3 fs-4 fst-italic"
                    placeholder="Ingresa correo"
                    name="correo"
                    onChange={(e) => setData({ ...data, correo : e.target.value})}
                />
                <input 
                    type="text" 
                    className="form-control mb-3 fs-4 fst-italic"
                    placeholder="Ingresa contraseña"
                    name="contraseña"
                    onChange={(e) => setData({ ...data, contraseña : e.target.value})}
                />
                <button type="submit" className="btn btn-success w-100 mb-3">INSCRIBIRSE</button>
                <div className="d-flex justify-content-center">
                    <Link className="fst-italic fs-4" to={`ingresar`}>Ya tengo una cuenta</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Resgitro