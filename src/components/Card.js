export default function Card({price, talle, title}) {

    console.log("Precio: ", price)
    console.log("Talla: ", talle)
    console.log("Titulo: ", title)

    return(
        <div className="card-item">
            <h2>{title}</h2>
            <p>Precio : $ {price}</p>
            <p>Talla : {talle}</p>
            <button> Comprar </button>
        </div>
    )
}

