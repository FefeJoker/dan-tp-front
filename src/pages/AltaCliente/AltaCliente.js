import {
    Button,
    Checkbox,
    Heading,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper, NumberInput,
    NumberInputField,
    NumberInputStepper,
    Text
} from "@chakra-ui/react";
import {useState} from "react";
import Obras from "../../components/Obras/Obras";
import AgregarObra from "../../components/AgregarObra/AgregarObra";

const AltaCliente = () => {
    const format = (val) => `$` + val
    const parse = (val) => val.replace(/^\$/, "")

    const [value, setValue] = useState("0")
    const [obras, setObra] = useState([])

    const deleteObra = (id) => {
        setObra(obras.filter((o) => o.id !== id))
    }

    const addObra = (obra) => {
        setObra([...obras, obra])
    }

    return(
        <div>
            <Heading className={"title-header-position"}> Alta de Cliente </Heading>
            <form>
                <Text className={"left-text"}>Razón Social</Text>
                <Input type="text" placeholder="Ingresar Razón Social" variant={"flushed"}/>
                <Text className={"left-text"}>E-mail</Text>
                <Input type="email" placeholder="Ingrese E-mail" variant={"flushed"}/>
                <Text className={"left-text"}>Máximo de Cuenta Corriente</Text>
                <NumberInput
                    defaultValue={0}
                    min={0}
                    precision={2}
                    variant={"flushed"}
                    onChange={(valueString) => setValue(parse(valueString))}
                    value={format(value)}
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Checkbox className={"left-text"}>
                    Habilitado Online
                </Checkbox>
                <AgregarObra addObra={addObra}/>
                {obras.length > 0 ? (<Obras obras={obras} deleteObra={deleteObra}/>)
                                    :   ("")
                }
                <div className={"right-text"}>
                    <Button>
                        Confirmar
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default AltaCliente