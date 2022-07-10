import { useContext } from "react";

import { UserContext } from "../../context/UserProvider";

function Logout() {
    const {logout} = useContext(UserContext);
    return (
        <div className="logout">
            <h2 className="title">¿SEGURO QUIERE CERRAR SESIÓN?</h2>
            <div className="img-center-container">
                <img
                    className="img-center" 
                    src="https://i.ibb.co/Pcyz2Tr/karate.png"
                />
            </div>
            <br/>
            <button className="form-orange-button" style={{marginTop:'20px'}} onClick={()=>{logout()}}>CERRAR SESIÓN</button>
        </div>
    );
}

export {Logout};