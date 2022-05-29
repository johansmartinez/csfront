import { Nav } from "./nav/Nav";

function Principal() {
    return ( 
        <>
            <Nav/>
            <div className="tintatron-div">
                <button className="big-orange-button" type="button">EMPIEZA AHORA</button>
            </div>
            <div>
                ACERCA DE:
            </div>
        </> 
    );
}

export {Principal};