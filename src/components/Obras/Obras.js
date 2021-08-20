import Obra from "../Obra/Obra";

const Obras = ({obras, deleteObra}) => {
    return(
        <>
            {obras.map((obra) => (
                <Obra key={obra.id} obra={obra} deleteObra={deleteObra}/>
            ))}
        </>
    )
}


export default Obras