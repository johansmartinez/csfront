import axios from "axios";
import { useState, useContext } from "react";
import Swal from "sweetalert2";
import { ViewContext } from "../../context/ViewProvider";


function Login(props) {
    const [documento, setDocumento] = useState('');
    const [constrasena, setContrasena] = useState('');

    const {setView} = useContext(ViewContext);

    const handleLogin=()=>{
        if (documento&&constrasena) {
            /*
            axios.post('', {documento,constrasena})
            .then(()=>{
                //registar usuario y token
            })
            .catch((e)=>{
                Swal.fire({
                    icon: 'error',
                    text: `${e}`,
                    confirmButtonColor:'#fe6601'
                })
            })
            */
        }else{
            Swal.fire({
                icon: 'error',
                text: 'Por favor rellene los campos obligatorios',
                confirmButtonColor:'#fe6601'
            })
        }
    };

    return (
        <form >
            <h2 className="title">Inicio de Sesión</h2>
            <p className="text-normal">Por favor relllene los campos obligatorios (<span className="red">*</span>). </p>
            <label className="field-form">
                <p>Documento<span className="red">*</span>:</p>
                <input type='text' placeholder="Ingrese un número de documento" value={documento} onChange={e=>{setDocumento(e.target.value)}}/>
            </label>
            <label className="field-form">
                <p>Contraseña<span className="red">*</span>:</p>
                <input type='text' placeholder="Ingrese un número de documento" value={constrasena} onChange={e=>{setContrasena(e.target.value)}}/>
            </label>
            <button type="button" className="form-dark-button" onClick={()=>{setView('SINGUP')}}>
                CREAR CUENTA
            </button>
            <button type="button" className="form-orange-button" onClick={handleLogin}>
                INICIAR
            </button>
        </form>
    );
}

export default Login;