import {Button, Heading, Select} from "@chakra-ui/react";
import {useState} from "react";
import AgregarDetalle from "../../components/AgregarDetalle/AgregarDetalle";
import Detalles from "../../components/Detalles/Detalles";


const AltaPedido = () => {
    const [obra, setObra] = useState()
    const [detalles, setDetalles] = useState([])

    const onClick = (e) => {
        e.preventDefault()

        if(obra !== undefined && detalles.length > 0){
            const pedido = {
                obra: obra,
                detalles: detalles
            }

            //TODO agregar post al boton crear
        }

    }
    const deleteDetalle = (id) => {
        setDetalles(detalles.filter((d) => d.id !== id))
    }

    const addDetalle = (detalle) => {
        setDetalles([...detalles, detalle])
    }


    const obras = [
        {
            id: 1,
            descripcion: "Obra 1"
        }
    ] //TODO fetch obras


    return(
        <form className={"border-form"}>
            <Heading className={"title-header-position"}> Alta Pedido </Heading>
            <Select placeholder={"Seleccione Obra"}
                    onChange={(e) => setObra(obras.find((o) => o.id == e.target.value))}
            >
                {obras.length > 0 ? (obras.map((obra) => (
                    <option value={obra.id}>
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