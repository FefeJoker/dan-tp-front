import {Button, Heading, Input, Text, Select, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";
import {useState} from "react";

const AltaProducto = () => {
    const format = (val) => `$` + val
    const parse = (val) => val.replace(/^\$/, "")

    const [value, setValue] = useState("0")

    return(
        <div>
            <Heading className={"title-header-position"}>Alta de Productos</Heading>
            <form>
                <div>
                    <Text className={"left-text"}>Nombre</Text>
                    <Input type="text" placeholder="Ingresar Nombre" variant={"flushed"}/>
                    <Text className={"left-text"}>Descripcion</Text>
                    <Input type="text" placeholder="Ingrese Descripcion" variant={"flushed"}/>
                    <Text className={"left-text"}>Precio</Text>
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
                    <Text className={"left-text"}>Stock Mínimo</Text>
                    <NumberInput defaultValue={0} min={0} precision={0} variant={"flushed"}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Text className={"left-text"}>Stock Actual</Text>
                    <NumberInput defaultValue={0} min={0} precision={0} variant={"flushed"}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Text className={"left-text"}>Unidad</Text>
                    <Select type="combobox" variant={"flushed"}>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                </div>
                <div className={"right-text"}>
                    <Button>
                        Agregar
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default AltaProducto