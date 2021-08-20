import "./Obra.css"
import {CloseIcon} from "@chakra-ui/icons";

const Obra = ({obra, deleteObra}) => {
    return (
        <div className={"bordes"}>
            <h3>
                Descripción: {" " + obra.descripcion} <CloseIcon style={{cursor: "pointer"}} onClick={() => deleteObra(obra.id)}/>
            </h3>
            <h3>Tipo de Obra: {" " + obra.tipoObra.descripcion}</h3>
            <h4>Direccón: {" " + obra.direccion}</h4>
            <h5>Superficie: {" " + obra.superficie + ""} &#x33A1;</h5>
            <h6>Lat {obra.latitud} : Long {obra.longitud}</h6>
        </div>
    )
}

export default Obra;