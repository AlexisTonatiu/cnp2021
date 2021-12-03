import { useState, useEffect } from "react"
import CardAhora from "../components/CardAhora"
import Nav from "../components/Nav"
import styles from '../styles/Home.module.css'
import imgNada from '../images/nadaporaqui.png'
import Image from 'next/image'

import {participanteLogged, talleres, programa} from "../pages/index";

const Ahora = () => {
    const hoy = new Date();
    
    const [ev, setEv] = useState(0)
    const ahorita = "";
    useEffect(() => {
        const id = setInterval(() => {
            hoy = new Date();
            ahorita = new Date(hoy.getFullYear(), ( hoy.getMonth() + 1 ), hoy.getDate(), hoy.getHours() ,hoy.getMinutes() , hoy.getSeconds());
            //ahorita =  new Date(2021, 11, 3, 11, 45, 0);
            programa.forEach(evento => {
                const fecha = evento.fecha.split("-")
                const hi = evento.horaInicio.split(":")
                const hf = evento.horaFin.split(":")
                const hora1 = new Date(fecha[0], fecha[1] - 1, fecha[2], hi[0], hi[1], 0)
                const hora2 = new Date(fecha[0], fecha[1] - 1, fecha[2], hf[0], hf[1], 0)
                // comparar para ver si esta en el rango
           
                if(ahorita >= hora1 && ahorita <= hora2){
                    setEv(evento)
                } 
            });
        }, 1000)
        return () => clearInterval(id);
    }, [ev])
    
    return (
        <>
            <Nav></Nav>

            <div className={styles.container2}>
                {(ev != 0) ? 
                <div>
                    <CardAhora evento={ev}></CardAhora>
                
                <h4>Siguiente: {(programa[ev.id]['actividad'] == "Curso - Taller") ? (talleres[programa[ev.id]['ntaller']]["taller"]) : (programa[ev.id]['actividad'])}</h4>
                </div>    
                : 
                <div className={styles.container}> 
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h2>
                    No hay nada por ahora...
                    </h2>
                    <Image src={imgNada} ></Image>
                </div> }
            </div>
        </>
    )
}

export default Ahora