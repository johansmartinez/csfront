import { createContext, useState } from "react";

const UserContext=createContext();

function UserProvider({children}) {
    
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
            'LISTA DE ALUMNOS',
            'CONTROL DE ASISTENCIA',
            'REGISTRAR INSTRUCTOR',
            'CERRAR SESIÓN'
        ],
    };

    const getMenu=()=>{
        return routes[user.rol||'estudiante'];
    };
    

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
                validateUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export {UserProvider, UserContext };