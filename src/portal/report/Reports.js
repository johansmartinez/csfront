import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserProvider";
import axios from "axios";
import { SERVER } from '../../context/Backend';

function Report() {

    const {user, getToken} = useContext(UserContext);
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const config={
            headers:{
                'Access-Control-Allow-Origin': '*',
                'token-clubsue':getToken()
            }
        }
        axios.get(`${SERVER}/report/${user.documento}`,config)
        .then(({data})=>{
            setdata(data.reverse())
            setloading(false)
        }).catch(()=>{})
    }, [])
    return (
        <>
            <h2 className="title">REPORTES</h2>
            <br/>
            <br/>
            {
                (!loading&&data.length===0)&&
                    <>
                        <p className="text-normal">Usted no tiene reportes registrados 😢</p>
                    </>
            }
            <div className="reports-container">
                {
                    data.map((e)=>(
                        <div className="div-borde">
                            <h2 className="title">({e.componente}) {e.requisito}</h2>
                            <p className="text-bold">Instructor: <span className="text-normal">{e.instructor}</span></p>
                            <p className="text-bold">Cinta: <span className="text-normal">{e.cinta}</span></p>
                            <p className="desc">{e.descripcion}</p>
                        </div>
                    ))
                }
                
            </div>
        </>
    );
}

export {Report};