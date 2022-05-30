import { useState } from "react";
import { useResolution } from "../../resolution/useResolution";

function Nav() {
    
    const [menu, setMenu] = useState(false);

    return ( 
        <nav className="nav-principal">
            {useResolution()==='DESKTOP'&&
                <ul>
                    <a href="#about" className="link-nav-principal">Acerca de</a>
                    <a href="#contact" className="link-nav-principal">Contacto</a>
                </ul>
            }
            {useResolution()==='MOBILE'&&
                <button type="button" className="img-icon"
                    onClick={()=>setMenu(true)}
                > <img src="https://i.ibb.co/0M110GD/menu-1.png"/></button>
            }
            {!!menu&&
                <div className="menu">
                    <button className="menu-button" onClick={()=>setMenu(false)}>x</button>
                    <a href="#about" className="link-menu">Acerca de</a>
                    <a href="#contact" className="link-menu">Contacto</a>
                </div>
            }
            <span>CLUB SUE</span>
            <button className="dark-button" type="button">INICIAR SESIÓN</button>
        </nav>
    );
}

export {Nav};