import "./Pedido.css"

const Pedido = ({pedido}) => {
    return(
        <div className={"bordes"}>
            <h2>{pedido.id}</h2>
            <h3>{pedido.estadoPedido.estado}</h3>
            <h3>{pedido.obra.descripcion}</h3>
            <h4>{pedido.fechaPedido}</h4>
        </div>
    )
}

export default Pedido