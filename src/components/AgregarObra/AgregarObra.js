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
import {useState} from "react";
import "./AgregarObra.css"

const AgregarObra = ({addObra}) => {
    const [id, setId] = useState(1)
    const [descripcion, setDescripcion] = useState("")
    const [direccion, setDireccion] = useState("")
    const [superficie, setSuperficie] = useState(0)
    const [latitud, setLatitud] = useState(0)
    const [longitud, setLongitud] = useState(0)
    const [tipoObra, setTipoObra] = useState()
    const [tipoObras, setTipoObras] = useState([
        {
            id: 1,
            descripcion: "T1"
        },
        {
            id: 2,
            descripcion: "T2"
        }
    ]) //TODO fetch tipos de obra


    const onPressAdd = (e) => {
        e.preventDefault()

        if(tipoObra !== undefined){
            addObra({id, descripcion, direccion, superficie, latitud, longitud, tipoObra})
            setId(id + 1)
            setDescripcion("")
            setDireccion("")
            setSuperficie(0)
            setLatitud(0)
            setLongitud(0)
        }
    }

    return(
        <form className={"border-form"}>
            <Heading size={"md"} style={{textAlign: "center"}}> Agregar Obra </Heading>
            <Input type="text" placeholder="Ingresar Descripción" variant={"flushed"}
                   value={descripcion} onChange={(e) => setDescripcion(e.target.value)}
            />
            <Input type="email" placeholder="Ingrese Dirección" variant={"flushed"}
                   value={direccion} onChange={(e) => setDireccion(e.target.value)}
            />
            <div className={"lat-long"}>
                <Text className={"left-text"}>Superficie</Text>
                <NumberInput defaultValue={0} min={0} precision={0} variant={"flushed"}
                             value={superficie} onChange={(valueString) => setSuperficie(+valueString)}
                >
                    <NumberInputField/>
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Text className={"left-text"} style={{paddingLeft: "1em"}}>Latitud</Text>
                <NumberInput defaultValue={0} min={-90} max={90} precision={4} variant={"flushed"}
                             value={latitud} onChange={(valueString) => setLatitud(+valueString)}
                >
                    <NumberInputField/>
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Text className={"left-text"} style={{paddingLeft: "1em"}}>Longitud</Text>
                <NumberInput defaultValue={0} min={-180} max={180} precision={4} variant={"flushed"}
                             value={longitud} onChange={(valueString) => setLongitud(+valueString)}
                >
                    <NumberInputField/>
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </div>
            <div className={"right-text"} style={{paddingBottom: "1em"}}>
                <Select placeholder={"Seleccione Tipo de Obra"}
                        onChange={(e) => setTipoObra(tipoObras.find((to) => to.id == e.target.value))}
                >
                    {tipoObras.length > 0 ? (tipoObras.map((tipo) => (
                        <option value={tipo.id}>
                            {tipo.descripcion}
                        </option>
                    ))) : ""
                    }
                </Select>
                <Button onClick={(e) => onPressAdd(e)}>
                    Agregar
                </Button>
            </div>
        </form>
    )
}

export default AgregarObra