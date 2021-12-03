import cardStyle from '../styles/CardAhora.module.css'
import imgTaller from '../images/taller.png'
import imgMagistral from '../images/magistral.png'
import imgCoffe from '../images/receso.png'
import imgComida from '../images/comida.png'
import imgInau from '../images/inaugura.png'
import imgClausura from '../images/clausura.png'
import imgRegistro from '../images/registro.png'
import iconPonente from '../images/ponente.svg'
import iconHora from '../images/hora.svg'
import iconLugar from '../images/lugar.svg'
import Image from 'next/image'

import { participanteLogged, talleres, programa } from "../pages/index"

const CardAhora = ({ evento }) => {

    // elegir la imagen a usar y otras cosas
    const imagenAUsar = null;
    const titulo = "";
    const tituloG = "";
    var ponente = false;
    var nombrePonente = "";
    var lugar = false;
    var nombreLugar = ""

    switch (evento.actividad) {
        case "Registro de Inscripciones":
            imagenAUsar = imgRegistro;
            tituloG = evento.actividad;
            ponente = false;
            lugar = false;
            break;

        case "Inauguracion":
            imagenAUsar = imgInau;
            tituloG = evento.actividad;
            ponente = false;
            lugar = true;
            break;

        case "Conferencia Magistral":
            imagenAUsar = imgMagistral;
            tituloG = evento.titulo;
            titulo = evento.actividad;
            ponente = true;
            nombrePonente = evento.ponente;
            lugar = true;
            break;

        case "Receso":
            imagenAUsar = imgCoffe;
            titulo = ""
            tituloG = evento.actividad
            ponente = false;
            lugar = false;
            break;

        case "Horario de Comida":
            imagenAUsar = imgComida;
            titulo = ""
            tituloG = evento.actividad
            ponente = false;
            lugar = false;
            break;
        case "Clausura y Entrega de Constancias":
            imagenAUsar = imgClausura;
            titulo = ""
            tituloG = evento.actividad
            ponente = false;
            lugar = false;
            break;
        case "Curso - Taller":
            imagenAUsar = imgTaller;
            titulo = evento.actividad
            tituloG = talleres[participanteLogged["taller" + evento.ntaller]]["taller"]
            ponente = true;
            nombrePonente = talleres[participanteLogged["taller" + evento.ntaller]]["ponente"]
            lugar = true;
            nombreLugar = talleres[participanteLogged["taller" + evento.ntaller]]["lugar"]
            break;
        default:
            break;
    }

    return (
        <div className={cardStyle.card}>
            <Image src={imagenAUsar} ></Image>
            <p>{titulo}</p>
            <h2>{tituloG}</h2>
            {ponente ?
                <div className={cardStyle.container}>
                    <Image src={iconPonente} height="24px" width="24px"></Image>
                    <div >
                        {nombrePonente}
                    </div>
                </div> :
                <></>}
            {lugar ?
                <div className={cardStyle.container}>
                    <Image src={iconLugar} height="24px" width="24px"></Image>
                    <div>
                        {nombreLugar}
                    </div>
                </div> :
                <></>}
            <div>
                <Image src={iconHora} height="24px" width="24px"></Image>
                <div>
                    {evento.horaInicio + "-" + evento.horaFin}
                </div>
            </div>
        </div>
    )
}

export default CardAhora