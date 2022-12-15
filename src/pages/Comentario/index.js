import { api } from "../../api/api"
import { useState,useEffect,useContext } from "react"
import { AuthContext  } from "../../contexts/authContext"



export function Comentarios(){
    const [comentarios, setComentarios] = useState([]);

    // const {loggedInUser} = useContext(AuthContext);
    
    useEffect(() => {
        async function fetchComentarios(){
            try{
                const response = await api.get("/comentarios");

                setComentarios(response.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchComentarios();    
    },[]);

    return(
        <>
            {comentarios.map((cR)=>{
                return(
                    <div>
                        <p>{cR.comentario}</p>                        
                    </div>
                )
            })}



        </>
    )


}