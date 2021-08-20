import "./Pedido.css"

const Pedido = ({pedido}) => {
    return(
        <div className={"bordes"}>
            <h2>ID: {" " + pedido.id}</h2>
            <h3>Estado: {" " + pedido.estadoPedido.estado}</h3>
            <h3>Obra: {" " + pedido.obra.descripcion}</h3>
            <h4>Fecha de Pedido: {" " + pedido.fechaPedido}</h4>
        </div>
    )
}

export default Pedido