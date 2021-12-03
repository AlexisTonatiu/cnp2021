import Link from "next/link"
import navStyles from "../styles/Nav.module.css"
import Image from 'next/image'
// importar iconos
import workshop from "../images/workshop.svg"


export default function Nav() {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/ahora">
                    <div className={ navStyles.myGroup}>
                            <div className={navStyles.catIcon}>
                                <Image src={workshop} height="24px" width="24px"></Image>
                            </div>
                            <div className={navStyles.catText}>
                                Ahora
                            </div>
                        </div>
                    </Link>
                </li>
               
                <li>
                    <Link href="/misTalleres">

                        <div className={ navStyles.myGroup}>
                            <div className={navStyles.catIcon}>
                                <Image src={workshop} height="24px" width="24px"></Image>
                            </div>
                            <div className={navStyles.catText}>
                                Talleres
                            </div>
                        </div>

                    </Link>
                </li>
            </ul>
        </nav>
    )
}