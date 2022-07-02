import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserProvider";
import axios from "axios";
import { SERVER } from '../../context/Backend';
import {ComponentCard} from "./ComponentCard";



function Tracking() {
    const {user, getToken} = useContext(UserContext);
    const [data, setdata] = useState([])

    let PATADAS=(data.length===0)?[]:data.filter(e=>e.componente==="PATADAS")
    let FLEXIBILIDAD=(data.length===0)?[]:data.filter(e=>e.componente==="FLEXIBILIDAD")
    let OTRO=(data.length===0)?[]:data.filter(e=>e.componente!=="PATADAS"&&e.componente!=="FLEXIBILIDAD")

    useEffect(() => {
        const config={
            headers:{
                'Access-Control-Allow-Origin': '*',
                'token-clubsue':getToken()
            }
        }
        axios.get(`${SERVER}/report/performance/${user.documento}`,config)
        .then(({data})=>{
            setdata(data)
        }).catch(()=>{})
    }, [])
    
    return (
        <>
            <h2 className="title">HOLA, {String(user.nombres).toUpperCase()} {String(user.apellidos).toUpperCase()}</h2>
            <br/>
            <p className="text-bold">CINTA: <span className="text-normal">{data[0]?.cinta||''}</span></p>
            <br/>
            <h2 className="title">PROGRESO:</h2>
            <div className="progress-div">
                <ComponentCard  title={'FLEXIBILIDAD'} array={FLEXIBILIDAD}/>
                <ComponentCard  title={'PATADAS'} array={PATADAS}/>
                <ComponentCard  title={'COMBATE'} array={OTRO}/>
            </div>
            
        </>
    );
}

export {Tracking};