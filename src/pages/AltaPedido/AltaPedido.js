import {Button, Heading, Select} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import AgregarDetalle from "../../components/AgregarDetalle/AgregarDetalle";
import Detalles from "../../components/Detalles/Detalles";


const AltaPedido = () => {
    const [obra, setObra] = useState()
    const [detalles, setDetalles] = useState([])
    const [obras, setObras] = useState([])
    const axios = require("axios")

    const onClick = (e) => {
        e.preventDefault()

        if(obra !== undefined && detalles.length > 0){
            const pedido = {
                obra: obra,
                detalles: detalles
            }


            axios.post(`http://backend.fehler.gregoret.com.ar:8085/pedidos-service/api/pedido`, pedido)
        } //TODO cambiar url

    }
    const deleteDetalle = (id) => {
        setDetalles(detalles.filter((d) => d.id !== id))
    }

    const addDetalle = (detalle) => {
        setDetalles([...detalles, detalle])
    }


    async function fetchObras() {
        const cliente = JSON.parse(localStorage.getItem("cliente"))

        return await axios.get(`http://backend.fehler.gregoret.com.ar:8085/usuarios-service/api/obra?idCliente=${cliente.id}`)
    }  //TODO cambiar url

    useEffect(() => {
        fetchObras().then((res) => setObras(res.data))
        }, [])


    return(
        <form className={"border-form"}>
            <Heading className={"title-header-position"}> Alta Pedido </Heading>
            <Select placeholder={"Seleccione Obra"}
                    onChange={(e) => setObra(obras.find((o) => o.id == e.target.value))}
            >
                {obras.length > 0 ? (obras.map((obra) => (
                    <option key={obra.id} value={obra.id}>
                        {obra.descripcion}
                    </option>
                ))) : ""
                }
            </Select>
            <AgregarDetalle addDetalle={addDetalle}></AgregarDetalle>
            <Heading size={"md"} style={{textAlign: "center"}}> Detalles </Heading>
            <Detalles detalles={detalles} deleteDetalle={deleteDetalle}></Detalles>
            <div className={"right-text"}>
                <Button onClick={(e) => onClick(e)}>
                    Crear
                </Button>
            </div>
        </form>
    )
}

export default AltaPedido