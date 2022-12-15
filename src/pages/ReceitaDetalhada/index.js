import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../api/api";
import { CriarComentario } from "../CriarComentario";


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

    <div>
     <h1>{receitas.name}</h1>
     {receitas.comentario.map((cE) => {
      return(
      <p>{cE.comentario}</p>)
     })}
     <CriarComentario/>
     </div>
    </>
  )

}