import { useState } from "react";

function RegisterAttendance() {

    const [student, setStudent] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    const handleSend=()=>{
        
    }

    return (
        <>
            <form className="form-normal">
                <h2 className="title">Registrar asistencia</h2> 
                <p className="text-normal">Por favor rellene los campos obligatorios (<span className="red">*</span>). </p>
                <label className="field-form">
                    <p>Fecha de asistencia:<span className="red">*</span></p>
                    <input type='date' placeholder="Ingrese la fecha" value={date} onChange={e=>{setDate(e.target.value)}}/>
                </label>
                <label className="field-form">
                    <p>Documento del estudiante:<span className="red">*</span></p>
                    <input type='text' placeholder="Ingrese el número de documento del estudiante" value={student} onChange={e=>{setStudent(e.target.value)}}/>
                </label>
                <button type="button" className="form-orange-button" onClick={handleSend}>
                    REGISTRAR
                </button>
            </form>
        </>
    );
}

export {RegisterAttendance};