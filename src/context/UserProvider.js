import axios from "axios";
import { createContext, useContext, useState } from "react";
import { ViewContext } from "./ViewProvider";
import { SERVER } from "./Backend";

const UserContext=createContext();

function UserProvider({children}) {
    const {setView} = useContext(ViewContext);
    const [user, setUser] = useState({});

    const setToken=(token)=>{
        localStorage.setItem('token-clubsue',JSON.stringify({token}))
    }

    const getToken=()=>{
        return JSON.parse(localStorage.getItem('token-clubsue')).token;
    }
    
    const routes={
        estudiante:[
            'PERFIL',
            'MI DESARROLLO',
            'ASISTENCIA',
            'MIS REPORTES',
            'CERRAR SESIÓN'
        ],
        instructor:[
            'PERFIL',
            'EVALUAR ALUMNOS',
            'REGISTRAR ASISTENCIA',
            'AGREGAR INFORME',
            'CERRAR SESIÓN'
        ],
        admin:[
            'PERFIL',
            'AGREGAR INSTRUCTOR/ADMINISTRADOR',
            'AGREGAR REQUISITO',
            'CERRAR SESIÓN'
        ],
    };

    const getMenu=()=>{
        return routes[user.rol||'estudiante'];
    };
    
    const logout=()=>{      
        setView('LOGIN');
        setUser({});
        setToken('');
    }

    const reloadData=()=>{
        const config={
            headers:{
                'Access-Control-Allow-Origin': '*',
                'token-clubsue':getToken()
            }
        }
        return axios.get(`${SERVER}/person/${user.documento}`, config)
        .then(({data})=>{
            setUser(data)
        }).catch(()=>{})
    }

    const validateUser=user.documento!==''&&user.documento;

    return(
        <UserContext.Provider
            value={{
                user,
                setUser,
                getMenu,
                reloadData,
                validateUser,
                logout,
                setToken,
                getToken
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export {UserProvider, UserContext };