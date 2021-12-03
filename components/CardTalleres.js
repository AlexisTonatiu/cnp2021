import cardStyle from "../styles/CardTalleres.module.css"

const CardTalleres = ({ taller }) => {
    return (
        <div className={cardStyle.card}>
            
            <h4>{taller.taller}</h4>

            <div>
                Lugar: {taller.lugar}
            </div>
            <div>
                Ponente: {taller.ponente}
            </div>
        </div>
    )
}

export default CardTalleres