import {CloseIcon} from "@chakra-ui/icons";

const Detalle = ({detalle, deleteDetalle}) => {

    return (
        <div className={"bordes"}>
            <h3>
                Id: {" " + detalle.id}  <CloseIcon style={{cursor: "pointer"}} onClick={() => deleteDetalle(detalle.id)}/>
            </h3>
            <h3>Producto: {" " + detalle.producto.descripcion}</h3>
            <h4>Cantidad: {" " + detalle.cantidad}</h4>
            <h5>Precio: {" $" + detalle.precio}</h5>
        </div>

    )
}

export default Detalle;