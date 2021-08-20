import Detalle from "../Detalle/Detalle";

const Detalles = ({detalles, deleteDetalle}) => {
    return(
        <>
            {detalles.map((detalle) => (
                <Detalle key={detalle.id} detalle={detalle} deleteDetalle={deleteDetalle}/>
            ))}
        </>
    )
}


export default Detalles