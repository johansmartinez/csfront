import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserProvider";

function Report() {

    const {user} = useContext(UserContext);
    const [data, setdata] = useState({
        cinta:'BLANCA'
    })

    const report=[1,1,1,1,1,1]
    useEffect(() => {
        
    }, [data])
    return (
        <>
            <h2 className="title">REPORTES</h2>
            <br/>
            <p className="text-bold">CINTA: <span className="text-normal">{data.cinta}</span></p>
            <br/>
            <div className="reports-container">
                {
                    report.map(()=>(
                        <div className="div-borde">
                            <h2 className="title">(Componente) REQUISITO</h2>
                            <p className="text-bold">Instructor: <span className="text-normal">nombre instructor</span></p>
                            <p className="desc">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                        </div>
                    ))
                }
                
            </div>
        </>
    );
}

export {Report};