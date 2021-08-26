import {
    Button,
    Heading,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Select,
    Text
} from "@chakra-ui/react";
import {useEffect, useState} from "react";

const AltaProducto = () => {
    const format = (val) => `$` + val
    const parse = (val) => val.replace(/^\$/, "")
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState("0")
    const [stockMinimo, setStockMinimo] = useState(0)
    const [stockActual, setStockActual] = useState(0)
    const [unidad, setUnidad] = useState({})
    const [unidades, setUnidades] = useState([])
    const axios = require("axios")

    const fetchTipoProducto = async () => {
        return await axios.get(`http://fehler.gregoret.com.ar:85/producto-service/api/unidad`)
    } //TODO cambiar url

    const fetchProducto = async () => {

        if(unidad !== undefined){
            const data = {
                nombre: nombre,
                descripcion_prod: descripcion,
                precio: precio,
                stockMinimo: stockMinimo,
                stockActual: stockActual,
                id_unidad: unidad.id,
                descripcion_unidad: unidad.descripcion
            }

            console.log(data)
            return await axios.post(`http://fehler.gregoret.com.ar:85/producto-service/api/producto`, data)
        }
    } //TODO cambiar url

    const onClick = () => {
        fetchProducto()
    }

    useEffect(() => {
        fetchTipoProducto().then((res) => setUnidades(res.data))
    },[])

    return(
        <div>
            <Heading className={"title-header-position"}>Alta de Productos</Heading>
            <form>
                <div>
                    <Text className={"left-text"}>Nombre</Text>
                    <Input type="text" placeholder="Ingresar Nombre" variant={"flushed"}
                           onChange={(e) => setNombre(e.target.value)}
                    />
                    <Text className={"left-text"}>Descripcion</Text>
                    <Input type="text" placeholder="Ingrese Descripcion" variant={"flushed"}
                           onChange={(e) => setDescripcion(e.target.value)}
                    />
                    <Text className={"left-text"}>Precio</Text>
                    <NumberInput
                        defaultValue={0}
                        min={0}
                        precision={2}
                        variant={"flushed"}
                        onChange={(valueString) => setPrecio(parse(valueString))}
                        value={format(precio)}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Text className={"left-text"}>Stock Mínimo</Text>
                    <NumberInput defaultValue={0} min={0} precision={0} variant={"flushed"}
                                 value={stockMinimo} onChange={(valueString) => setStockMinimo(+valueString)}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Text className={"left-text"}>Stock Actual</Text>
                    <NumberInput defaultValue={0} min={0} precision={0} variant={"flushed"}
                                 value={stockActual} onChange={(valueString) => setStockActual(+valueString)}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Text className={"left-text"}>Unidad</Text>
                    <Select placeholder={"Seleccionar Unidad"} type="combobox" variant={"flushed"}
                            onChange={(e) => setUnidad(unidades.find((u) => u.id == e.target.value))}
                    >
                        {(unidades?.map((unidad) =>
                            <option key={unidad.id} value={unidad.id}>{unidad.descripcion}</option>
                        ))}
                    </Select>
                </div>
                <div className={"right-text"}>
                    <Button onClick={() => onClick()}>
                        Agregar
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default AltaProducto