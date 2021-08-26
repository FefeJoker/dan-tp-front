import {Button, Input, Text, Heading} from "@chakra-ui/react";
import axios from "axios";
import {useState} from "react";
import {useHistory} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const fetchCliente = async () => {
        const data = {
            username: username,
            password: password
        }

        console.log(data)

        return await axios.post("http://fehler.gregoret.com.ar:85/usuarios-service/api/usuario/login", data)
    }

    const onClick = async () => {
        const response = await fetchCliente()
        validar(response.data)
    }

    const validar = (res) => {
        if(res){
            localStorage.setItem("cliente", JSON.stringify(res))
            history.push("/gestionpedidos")
        }
    }

    return(
        <div>
            <Heading className={"title-header-position"}>Corralón Ciudadela</Heading>
            <form>
                <div>
                    <Text className={"left-text"}>Usuario</Text>
                    <Input type="text" placeholder="Ingresar Usuario" variant={"flushed"}
                           value={username} onChange={(e) => setUsername(e.target.value)}
                    />
                    <Text className={"left-text"}>Contraseña</Text>
                    <Input type="password" placeholder="Ingrese Contraseña" variant={"flushed"}
                           value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={"right-text"}>
                    <Button onClick={() => onClick()}>
                        Ingresar
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Login