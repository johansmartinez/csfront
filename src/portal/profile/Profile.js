import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";

function Profile() {
    const {user} = useContext(UserContext);

    return (
        <>
            <h1 className="title">HOLA, {String(user.nombre).toLocaleUpperCase()} {String(user.apellido).toLocaleUpperCase()}</h1>
        </>
    );
}

export {Profile};