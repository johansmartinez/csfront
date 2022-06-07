import { useState } from "react";

function Evaluation() {
    const [search, setSearch] = useState(false);
    const [requirements, setRequirements] = useState([
        {id:1, nombre:'aaaa', componente:'Flexibilidad',state:false},
        {id:2, nombre:'bbbb', componente:'Flexibilidad',state:false},
        {id:3, nombre:'cccc', componente:'Flexibilidad',state:false},
    ])

    const [student, setStudent] = useState('');

    const handleChange=(id)=>{
        let i=requirements.findIndex(e=>e.id===id);
        if(i>=0){
            let temp=[...requirements];
            temp[i].state=!temp[i].state;
            setRequirements(temp);
        }
    }
    const handleSearch=()=>{
        setSearch(true)
    }

    const handleCancel=()=>{
        setSearch(false)
    }

    const handleAdd=()=>{
        setSearch(false)
        setStudent('');
    }

    return (
        <>
            <form className="form-normal">
                <h2 className="title">Evaluar estudiante</h2> 
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
                        <button type="button" className="form-dark-button" onClick={handleCancel}>
                            CANCELAR
                        </button>
                        {
                            requirements.map((e)=>(
                                <div className="eval-req">
                                    <p className={`text normal ${(e.state)?'line':''}`}>({e.componente}) {e.nombre}</p>
                                    <input type='checkbox' value={e.state} checked={e.state} onChange={()=>handleChange(e.id)}/>
                                </div>
                            ))
                        }
                        <button type="button" className="form-orange-button" onClick={handleAdd}>
                            EVALUAR
                        </button>
                    </>
                }
            </form>
        </>
    );
}

export {Evaluation};