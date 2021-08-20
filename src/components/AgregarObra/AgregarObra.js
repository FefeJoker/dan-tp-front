import {
    Button,
    Heading,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper, NumberInput,
    NumberInputField,
    NumberInputStepper, Text
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

    const onPressAdd = (e) => {
        e.preventDefault()

        addObra({id, descripcion, direccion, superficie, latitud, longitud})

        setId(id + 1)
        setDescripcion("")
        setDireccion("")
        setSuperficie(0)
        setLatitud(0)
        setLongitud(0)
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
                <NumberInput defaultValue={0} min={0} precision={0} variant={"flushed"}>
                    <NumberInputField
                        value={superficie} onChange={(e) => setSuperficie(e.target.value)}
                    />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Text className={"left-text"} style={{paddingLeft: "1em"}}>Latitud</Text>
                <NumberInput defaultValue={0} min={-90} max={90} precision={4} variant={"flushed"}>
                    <NumberInputField
                        value={latitud} onChange={(e) => setLatitud(e.target.value)}
                    />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Text className={"left-text"} style={{paddingLeft: "1em"}}>Longitud</Text>
                <NumberInput defaultValue={0} min={-180} max={180} precision={4} variant={"flushed"}>
                    <NumberInputField
                        value={longitud} onChange={(e) => setLongitud(e.target.value)}
                    />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </div>
            <div className={"right-text"} style={{paddingBottom: "1em"}}>
                <Button onClick={(e) => onPressAdd(e)}>
                    Agregar
                </Button>
            </div>
        </form>
    )
}

export default AgregarObra