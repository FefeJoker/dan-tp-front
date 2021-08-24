import {Button, Heading} from "@chakra-ui/react";
import Pedidos from "../../components/Pedidos/Pedidos";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const GestionPedidos = () => {
    const [pedidos, setPedidos] = useState([])

    const fetchPedidos = async () => {
        const cliente = JSON.parse(localStorage.getItem("cliente"))

        return await axios.get(`http://backend.fehler.gregoret.com.ar:8085/pedidos-service/api/pedido/cliente/${cliente.id}`)
    } //TODO cambiar url

    useEffect(() => {
        fetchPedidos().then((res) => setPedidos(res.data))
    }, [])

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