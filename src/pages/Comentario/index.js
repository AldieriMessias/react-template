import { api } from "../../api/api"
import { useState,useEffect,useContext } from "react"
import { AuthContext  } from "../../contexts/authContext"
import { Link, useNavigate } from "react-router-dom";



export function Comentarios(){
    const [comentarios, setComentarios] = useState([]);
    const navigate = useNavigate()

    const {loggedInUser} = useContext(AuthContext);
    
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


    async function handleDelete(comentarioId) {
        try {
          await api.delete(`/comentarios/${comentarioId}`);


          window.location.reload();
            
          navigate("/comentarios")
        
        } catch (err) {
          console.log(err);
        }
      }
    


    return(
        <>

            <Link to="/">
                <button>Início</button>
            </Link>   
            {comentarios.map((cR)=>{
                return(
                    <div>
                        <p>{cR.comentario}</p> 

                        {loggedInUser.user.role === "ADMIN" && (
              <button
                onClick={() => {
                  handleDelete(cR._id);
                }}
              >
                Deletar
              </button>
            )}

                                              
                    </div>
                )
            })}



        </>
    )


}