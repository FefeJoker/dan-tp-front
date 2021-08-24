import {useEffect, useState} from "react";
import {
    Button,
    Heading,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Select,
    Text
} from "@chakra-ui/react";
import "./AgregarDetalle.css"

const AgregarDetalle = ({addDetalle}) => {
    const [id, setId] = useState(1)
    const [cantidad, setCantidad] = useState(1)
    const [producto, setProducto] = useState()
    const axios = require("axios")
    const [productos, setProductos] = useState([])


    async function fetchProductos() {
        return await axios.get("http://backend.fehler.gregoret.com.ar:8085/producto-service/api/producto")
    }  //TODO cambiar url

    const onClick = (e) => {
        e.preventDefault()

        if(producto !== undefined){
            const detalle = {
                id: id,
                cantidad: cantidad,
                precio: producto.precio * cantidad,
                producto: producto
            }

            addDetalle(detalle)

            setId(id + 1)
            setCantidad(1)
        }
    }

    useEffect(() => {
        fetchProductos().then((res) => setProductos(res.data))
    }, [])
    return(
        <form className={"border-form"}>
            <Heading size={"md"} style={{textAlign: "center"}}> Agregar Detalle de Pedido </Heading>
            <Select placeholder={"Seleccione Producto"}
                    onChange={(e) => setProducto(productos.find((p) => p.id == e.target.value))}
            >
                {productos.length > 0 ? (productos.map((producto) => (
                    <option value={producto.id}>
                        {producto.descripcion_prod}
                    </option>
                ))) : ""
                }
            </Select>
            <div className={"horizontal-div"}>
                <Text>Cantidad:</Text>
                <NumberInput defaultValue={1} min={1} precision={0} variant={"flushed"}
                             value={cantidad} onChange={(valueString) => setCantidad(+valueString)}
                >
                    <NumberInputField/>
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <div className={"right-text"}>
                    <Button onClick={(e) => onClick(e)}>
                        Agregar
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default AgregarDetalle