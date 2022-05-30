import { useState, useContext } from "react";
import { useResolution } from "../../resolution/useResolution";
import {ViewContext} from "../../context/ViewProvider";


function NavPortal() {
    
    const [menu, setMenu] = useState(false);
    const {view,setView}= useContext(ViewContext);
    
    return ( 
        <nav className="nav-principal">
            {(view==='LOGIN'||view==='SINGUP')&&<button className="dark-button" type="button" onClick={()=>setView('HOMEPAGE')}>VOLVER</button>}
            
            <span>CLUB SUE</span>
            <div></div>
        </nav>
    );
}

export {NavPortal};