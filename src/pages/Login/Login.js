import { Button, Input, Text, Heading} from "@chakra-ui/react";

const Login = () => {
    return(
        <div>
            <Heading className={"title-header-position"}>Corralón Ciudadela</Heading>
            <form>
                <div>
                    <Text className={"left-text"}>Usuario</Text>
                    <Input type="text" placeholder="Ingresar Usuario" variant={"flushed"}/>
                    <Text className={"left-text"}>Contraseña</Text>
                    <Input type="password" placeholder="Ingrese Contraseña" variant={"flushed"}/>
                </div>
                <div className={"right-text"}>
                    <Button>
                        Ingresar
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Login