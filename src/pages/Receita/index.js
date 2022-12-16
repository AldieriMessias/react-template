import { api } from "../../api/api"
import { useState,useEffect,useContext } from "react"
import { AuthContext  } from "../../contexts/authContext"
import { Link } from "react-router-dom";
import style from "./style.module.css"



export function Receitas(){
    const [receitas, setReceitas] = useState([]);

    const {loggedInUser} = useContext(AuthContext);
    
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
        <div className= {style.receitas} >
            {receitas.map((cR)=>{
                return(
                    <Link to={`/receitas/${cR._id}`}>
                        <div>
                        {/* <Link> <h2>{cR.name}</h2></Link> */}
                        <h2 className= {style.color} >{cR.name}</h2>
                        </div>
                    </Link>    
                )
            })}


        </div>
            
        </>
    )


}