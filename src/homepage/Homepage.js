import { Nav } from "./nav/Nav";

function Homepage() {
    return ( 
        <>
            <Nav/>
            <div className="tintatron-div">
                <button className="big-orange-button" type="button">EMPIEZA AHORA</button>
            </div>
            <div id="about">
                <h2 className="title">ACERCA DE:</h2>
                <div className="about-container">
                    <p className="text-normal">Club Sue es una academia de Taekwondo, localizada en Tunja, que busca que sus alumnos obtengan y protegan el amor por el deporte , a través de la disciplina, el esfuerzo y la constancia</p>
                    <img src="https://i.ibb.co/VMMzPRy/clubsuelogo.png"/>
                </div>
                <img/>
            </div>
            <div id="contact">
                <h2 className="title rigth-align">CONTACTO:</h2>
                <div className="contact-container">
                    <div className="contact-item">
                        <img src="https://i.ibb.co/yn3vPPG/call-1.png"/>
                        <span>Celular:</span>
                        <p>3152451221</p>
                    </div>
                    <div className="contact-item">
                        <img src="https://i.ibb.co/qCystrr/placeholder.png"/>
                        <span>Ubicación:</span>
                        <p>Lúgar cercano al estadio de Tunja</p>
                    </div>
                    <div className="contact-item">
                        <img src="https://i.ibb.co/xG27jDF/timetable.png"/>
                        <span>Horario:</span>
                        <p>Lunes - Domingo</p>
                        <p>7pm - 8pm</p>
                    </div>
                </div>
            </div>
        </> 
    );
}

export {Homepage};