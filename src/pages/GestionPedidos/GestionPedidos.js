import {Button, Heading} from "@chakra-ui/react";
import Pedidos from "../../components/Pedidos/Pedidos";
import {Link} from "react-router-dom";

const GestionPedidos = () => {
    const pedidos = [
        {
            id: 1,
            fechaPedido: "10/10/2012",
            estadoPedido: {
                id: 1,
                estado: "Estado 1"
            },
            detalles: [
                {
                    cantidad: 1,
                    precio: 10,
                    producto: {
                        id: 1
                    }
                }
            ],
            obra:{
                id: 1,
                descripcion: "Obra 1"
            }
        },
        {
            id: 2,
            fechaPedido: "11/10/2012",
            estadoPedido: {
                id: 1,
                estado: "Estado 2"
            },
            detalles: [
                {
                    cantidad: 1,
                    precio: 10,
                    producto: {
                        id: 1
                    }
                }
            ],
            obra:{
                id: 1,
                descripcion: "Obra 2"
            }
        }
    ] //TODO fetch pedidos del cliente

    return(
        <div>
            <Heading className={"title-header-position"}>Corralón Ciudadela</Heading>
            <Link to={"/altapedido"}>
                <Button>Agregar Pedido</Button>
            </Link>
            <Heading size={"md"} style={{textAlign: "center"}}> Pedidos </Heading>
            {pedidos.length > 0 ? (<Pedidos pedidos={pedidos}/>)
                :   ("")
            }
        </div>
    )
}

export default GestionPedidos