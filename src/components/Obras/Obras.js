import Obra from "../Obra/Obra";

const Obras = ({obras, deleteObra}) => {
    return(
        <>
            {obras.map((obra) => (
                <Obra obra={obra} key={obra.id} deleteObra={deleteObra}/>
            ))}
        </>
    )
}


export default Obras