import { api } from "../../api/api"
import { useState,useEffect,useContext } from "react"
import { AuthContext  } from "../../contexts/authContext"



export function Receitas(){
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
            {receitas.map((cR)=>{
                return(
                    <div>
                        <h2>{cR.name}</h2>
                        <p>{cR.ingredientes}</p>
                        <p>{cR.modoDePreparo}</p>
                        <p>{cR.tempoDePreparo}</p>
                    </div>
                )
            })}



        </>
    )


}