import { createContext, useContext, useState } from "react";
import { ViewContext } from "./ViewProvider";

const UserContext=createContext();

function UserProvider({children}) {
    const {setView} = useContext(ViewContext)
    const [user, setUser] = useState({});

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
    };

    const getMenu=()=>{
        return routes[user.rol||'estudiante'];
    };
    
    const logout=()=>{
        setView('LOGIN');
        setUser({});
    }

    const reloadData=()=>{
        
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
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export {UserProvider, UserContext };