import { useState } from "react";

function AddReport() {

    const [search, setSearch] = useState(false);
    const [requirements, setRequirements] = useState([
        {id:1, nombre:'aaaa', componente:'Flexibilidad'},
        {id:2, nombre:'bbbb', componente:'Flexibilidad'},
        {id:3, nombre:'cccc', componente:'Flexibilidad'},
    ])

    const [student, setStudent] = useState('');
    const [requirement, setRequirement] = useState('')
    const [description, setDescription] = useState('');

    const handleSearch=()=>{
        setSearch(true)
    }

    const handleCancel=()=>{
        setSearch(false)
    }

    const handleAdd=()=>{
        setSearch(false)
        setStudent('');
        setRequirement('');
        setDescription('');
    }
    return (
        <>
            <form className="form-normal">
                <h2 className="title">Agregar informe</h2> 
                <p className="text-normal">Por favor rellene los campos obligatorios (<span className="red">*</span>). </p>
                <label className="field-form">
                    <p>Documento del estudiante:<span className="red">*</span></p>
                    <input type='text' disabled={search} placeholder="Ingrese el número de documento del estudiante" value={student} onChange={e=>{setStudent(e.target.value)}}/>
                </label>
                {!search&&<button type="button" className="form-orange-button" onClick={handleSearch}>
                    BUSCAR
                </button>}
                {!!search&&
                    <>
                        <label className="field-form">
                            <p>Requisito:<span className="red">*</span>:</p>
                            <select value={requirement} onChange={e=>setRequirement(e.target.value)}>
                                {requirements.map(e=>(
                                    <option className="option" value={`${e.id}`}>({e.componente}) {e.nombre}</option>
                                ))}
                            </select>
                        </label>
                        <label className="field-form">
                            <p>Descripción:<span className="red">*</span></p>
                            <textarea placeholder="Ingrese el número de documento del estudiante" value={description} onChange={e=>{setDescription(e.target.value)}}/>
                        </label>
                        <button type="button" className="form-dark-button" onClick={handleCancel}>
                            CANCELAR
                        </button>
                        <button type="button" className="form-orange-button" onClick={handleAdd}>
                            AGREGAR INFORME
                        </button>
                    </>
                }
            </form>
        </>
    );
}

export {AddReport};