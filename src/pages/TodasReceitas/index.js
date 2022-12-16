import { api } from "../../api/api"
import { useState,useEffect,useContext } from "react"
import { AuthContext  } from "../../contexts/authContext"
import { Link, useNavigate } from "react-router-dom";
import { CriarComentario } from "../CriarComentario";



export function TodasReceitas(){

    const navigate = useNavigate()
    const [receitas, setReceitas] = useState([]);

    // const [isDeleted, setIsDeleted] = useState(false)


    const {loggedInUser} = useContext(AuthContext);
    
    useEffect(() => {
        async function fetchReceitas(){
            try{
                const response = await api.get("/receitas");

                setReceitas(response.data);
                
            }catch(err){
                console.log(err)
            }
        }
        fetchReceitas();    
    },[]);


    async function handleDelete(receitaId) {
        try {
          await api.delete(`/receitas/${receitaId}`);
            
          window.location.reload();
        
        } catch (err) {
          console.log(err);
        }
      }
    


    return(
        <>
            <Link to="/">
                <button>Início</button>
            </Link>
      
            {receitas.map((cR)=>{
                return(
                    <div>
                        <h2>{cR.name}</h2>
                        <p>{cR.ingredientes}</p>
                        <p>{cR.modoDePreparo}</p>
                        <p>{cR.tempoDePreparo}</p>
                        
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