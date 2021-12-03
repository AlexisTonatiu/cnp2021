import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import circulos from "../images/circulos.png"
import anafLogo from "../images/anaf-logo.png"
import congresoLogo from "../images/3ER-CONGRESO-2.png"
import { ref, child, get } from "firebase/database";
import  db from "../components/firebase/firebase";
import { useRouter } from 'next/router'

var participantes = "";
var talleres = "";
var programa = "";
var participanteLogged = "";

export default function Home() {
  const router = useRouter()
  const loadUser = async event => {
    event.preventDefault()
    const dbRef = ref(db)
    get(child(dbRef, "/")).then((snapshot) => {

      participantes = snapshot.val()["participantes"]

      participantes.forEach(participante => {
        if (participante["tel"] == event.target.name.value.replace(' ', '') || participante["email"] == event.target.name.value.replace(' ', '')) {
          // guardar todos los datos porque alv
          talleres = snapshot.val()["talleres"]
          programa = snapshot.val()["programa"]
          participanteLogged = participante;
          router.push('/ahora')
        } else {
          console.log('no')
        }
      });

    });

  }
  return (
    <div className={styles.cont}>
      <Image src={circulos} className={styles.topCircles} />
      <main className={styles.main}>
        <div className={styles.container}>
          <Image src={congresoLogo} ></Image>
        </div>
        <text className={styles.description}>
          Ingrese su correo o numero celular
        </text>
        <form onSubmit={loadUser}>
          <input className={styles.campoNombre} id="name" name="name" type="text" autoComplete="name" required />
          <center>
            <button type="submit" className={styles.botonIngresar}>Ingresar</button>
          </center>
        </form>
      </main>
      <footer>
        <center className={styles.footer} >
          <Image src={anafLogo} height="74" width="100"></Image>
        </center>
      </footer>
    </div>
  )


}

export var participanteLogged;
export var talleres;
export var programa;

