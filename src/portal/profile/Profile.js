import { useContext, useState } from "react";
import { UserContext } from "../../context/UserProvider";

function Profile() {
    const [documento, setDocumento] = useState('');
    const [constrasena, setContrasena] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fecha_nacimiento, setFecha_nacimiento] = useState('');
    const [eps, setEps] = useState('-1');

    const [list, setList] = useState([]);

    const handleEdit=()=>{

    }

    return (
        <>
            <form className="form-normal">
                <h2 className="title">EDITAR PERFIL</h2> 
                <p className="text-normal">Por favor relllene los campos obligatorios (<span className="red">*</span>). </p>
                <label className="field-form">
                    <p>Nombre:<span className="red">*</span></p>
                    <input type='text' placeholder="Ingrese su nombre" value={nombre} onChange={e=>{setNombre(e.target.value)}}/>
                </label>
                <label className="field-form">
                    <p>Apellido:<span className="red">*</span></p>
                    <input type='text' placeholder="Ingrese su apellido" value={apellido} onChange={e=>{setApellido(e.target.value)}}/>
                </label>
                <label className="field-form">
                    <p>Correo:<span className="red">*</span></p>
                    <input type='email' placeholder="Ingrese su correo" value={correo} onChange={e=>{setCorreo(e.target.value)}}/>
                </label>
                <label className="field-form">
                    <p>Teléfono:<span className="red">*</span></p>
                    <input type='tel' placeholder="Ingrese un número de teléfono" value={telefono} onChange={e=>{setTelefono(e.target.value)}}/>
                </label>
                <label className="field-form">
                    <p>Fecha de Nacimiento:<span className="red">*</span></p>
                    <input type='date' placeholder="Ingrese un número de teléfono" value={fecha_nacimiento} onChange={e=>{setFecha_nacimiento(e.target.value)}}/>
                </label>
                <label className="field-form">
                    <p>EPS:<span className="red">*</span></p>
                    <select value={eps} onChange={e=>setEps(e.target.value)}>
                        <option className="option" value='-1'>SELECCIONE UNA EPS</option>
                        {list.map(e=>(
                            <option className="option" value={`${e.id}`}>{e.nombre}</option>
                        ))}
                    </select>
                </label>
                <label className="field-form">
                    <p>Contraseña<span className="red">*</span>:</p>
                    <input type='password' placeholder="Ingrese un número de documento" value={constrasena} onChange={e=>{setContrasena(e.target.value)}}/>
                </label>
                <button type="button" className="form-orange-button" onClick={handleEdit}>
                    EDITAR
                </button>
            </form>
        </>
    );
}

export {Profile};