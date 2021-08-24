import {
    Button,
    Checkbox,
    Heading,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
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

    const [razonSocial, setRazonSocial] = useState("")
    const [cuit, setCuit] = useState("")
    const [mail, setMail] = useState("")
    const [habilitadoOnline, setHabilitadoOnline] = useState(false)
    const [maxCuentaCorriente, setMaxCuentaCorriente] = useState("0")
    const [obras, setObra] = useState([])
    const axios = require("axios")

    const deleteObra = (id) => {
        setObra(obras.filter((o) => o.id !== id))
    }

    const addObra = (obra) => {
        setObra([...obras, obra])
    }


    const onClick = async () => {
        if(obras.length > 0){
            const cliente = {
                razonSocial: razonSocial,
                cuit: cuit,
                mail: mail,
                maxCuentaCorriente: maxCuentaCorriente,
                habilitadoOnline: habilitadoOnline,
                obras: obras
            }
            await axios.post(`http://backend.fehler.gregoret.com.ar:8085/usuarios-service/api/cliente`, cliente)
        } //TODO cambiar url

        console.log(obras.length)
    }

    return(
        <div>
            <Heading className={"title-header-position"}> Alta de Cliente </Heading>
            <form>
                <Text className={"left-text"}>Razón Social</Text>
                <Input type="text" placeholder="Ingresar Razón Social" variant={"flushed"}
                       onChange={(e) => setRazonSocial(e.target.value)}
                />
                <Text className={"left-text"}>CUIT</Text>
                <Input type="text" placeholder="Ingresar CUIT" variant={"flushed"}
                       onChange={(e) => setCuit(e.target.value)}
                />
                <Text className={"left-text"}>E-mail</Text>
                <Input type="email" placeholder="Ingrese E-mail" variant={"flushed"}
                       onChange={(e) => setMail(e.target.value)}
                />
                <Text className={"left-text"}>Máximo de Cuenta Corriente</Text>
                <NumberInput
                    defaultValue={0}
                    min={0}
                    precision={2}
                    variant={"flushed"}
                    onChange={(valueString) => setMaxCuentaCorriente(parse(valueString))}
                    value={format(maxCuentaCorriente)}
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Checkbox className={"left-text"}
                          value={habilitadoOnline} onChange={() => setHabilitadoOnline(!habilitadoOnline)}
                >
                    Habilitado Online
                </Checkbox>
                <AgregarObra addObra={addObra}/>
                {obras.length > 0 ? (<Obras obras={obras} deleteObra={deleteObra}/>)
                                    :   ("")
                }
                <div className={"right-text"}>
                    <Button onClick={onClick}>
                        Confirmar
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default AltaCliente