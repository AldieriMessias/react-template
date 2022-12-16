import { api } from "../../api/api"
import { useState,useEffect,useContext } from "react"
import { AuthContext  } from "../../contexts/authContext"
import { Link } from "react-router-dom";
import { CriarComentario } from "../CriarComentario";



export function TodasReceitas(){
    const [receitas, setReceitas] = useState([]);

    // const {loggedInUser} = useContext(AuthContext);
    
    useEffect(() => {
        async function fetchReceitas(){
            try{
                const response = await api.get("/receitas");

                setReceitas(response.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchReceitas();    
    },[]);

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
                        
                        <button>Apagar receita</button>
                        {/* <Link><button>Editar receita.</button> </Link> */}
                    </div>
                )
            })}



        </>
    )


}