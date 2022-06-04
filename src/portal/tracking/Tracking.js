import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserProvider";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Tracking() {
    const {user} = useContext(UserContext);
    const [data, setdata] = useState({
        cinta:'BLANCA'
    })

    useEffect(() => {
        
    }, [data])
    
    return (
        <>
            <h2 className="title">HOLA, {user.nombre}</h2>
            <br/>
            <p className="text-bold">CINTA: <span className="text-normal">{data.cinta}</span></p>
            <br/>
            <h2 className="title">PROGRESO:</h2>
            <div className="progress-div">
                <div className="progress-card">
                    <h2>FLEXIBILIDAD</h2>
                    <div>
                        <CircularProgressbar 
                            value={66}
                            text={`${66}%`}
                            strokeWidth={5}
                            styles={buildStyles({
                                strokeLinecap: "butt",
                                pathColor: "#fe6601",
                                textColor: "black",
                            })}
                        />
                    </div>
                    <p className="text-normal">REQUISITO OK  <img className="img-req" src="https://i.ibb.co/fQCvBCG/comprobado.png"/></p>
                    <p className="text-normal">REQUISITO NO  <img className="img-req" src="https://i.ibb.co/FYHGS4k/cancelar.png"/></p>
                </div>
            </div>
            
        </>
    );
}

export {Tracking};