import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../api/api";
import { CriarComentario } from "../CriarComentario";
import { Link } from "react-router-dom";


export function ReceitaDetalhada() {
  const {id} = useParams();

  const [receitas, setReceitas] = useState({
    name:"",
    comentario:[]
  });


  useEffect(() => {
    async function fetchReceitas() {
      try {
        
        const response = await api.get(`/receitas/${id}`);
        


       
        setReceitas(response.data);
        console.log(response)
      } catch (err) {
        console.log(err);
      }
    }
    fetchReceitas();
  }, []);

console.log(receitas)

  return(
    <>
<Link to="/">
    <button>Início</button>
  </Link>
    <div>
     <h1>{receitas.name}</h1>
     <img src={receitas.img} alt="Teste"/>
     <p>{receitas.ingredientes}</p>
     <p>{receitas.modoDePreparo}</p>
     <p>{receitas.tempoDePreparo}</p>
     
     {receitas.comentario.map((cE) => {
      return(
      <p>{cE.comentario}</p>)
     })}
     
         </div>

     <CriarComentario/>
    </>
  )

}