import "./Obra.css"
import {CloseIcon} from "@chakra-ui/icons";

const Obra = ({obra, deleteObra}) => {
    return (
        <div className={"bordes"}>
            <h2>
                {obra.descripcion} <CloseIcon style={{cursor: "pointer"}} onClick={() => deleteObra(obra.id)}/>
            </h2>
            <h3>{obra.tipoObra.descripcion}</h3>
            <h4>{obra.direccion}</h4>
            <h5>{obra.superficie + ""} &#x33A1;</h5>
            <h6>Lat {obra.latitud} : Long {obra.longitud}</h6>
        </div>
    )
}

export default Obra;