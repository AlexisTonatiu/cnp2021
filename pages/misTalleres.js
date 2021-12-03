import CardTalleres from "../components/CardTalleres"
import Nav from "../components/Nav"
import styles from '../styles/Home.module.css'

import { participanteLogged, talleres, programa } from "./index"
const misTalleres = () => {
    // crear lista de talleres a los que se inscribio el usuario
    // lo hice horrible pero no hay tiempo
    var talleresParticipante = [talleres[participanteLogged["taller1"]],
    talleres[participanteLogged["taller2"]],
    talleres[participanteLogged["taller3"]],
    talleres[participanteLogged["taller4"]],
    talleres[participanteLogged["taller5"]],]
    console.log(talleres)
    return (
        <>
            <Nav></Nav>
            {
                (talleres[1] != undefined) ?
                    <div className={styles.container2}>
                        {talleresParticipante.map(taller => (<CardTalleres key={taller.id} taller={taller}></CardTalleres>))}
                    </div> :
                    <></>
            }

        </>
    )
}

export default misTalleres