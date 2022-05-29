import { useResolution } from "../../resolution/useResolution";

function Nav() {
    return ( 
        <nav className="nav-principal">
            {useResolution()==='DESKTOP'&&
                <ul>
                    <a className="link-nav-principal">Acerca de</a>
                    <a className="link-nav-principal">Contacto</a>
                </ul>
            }
            {useResolution()==='MOBILE'&&
                <button type="button"> <img src="https://i.ibb.co/0M110GD/menu-1.png"/></button>
            }
            <span>CLUB SUE</span>
            <button className="dark-button" type="button">INICIAR SESIÓN</button>
        </nav>
    );
}

export {Nav};