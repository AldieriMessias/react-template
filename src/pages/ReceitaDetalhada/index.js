import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../api/api";


export function ReceitaDetalhada() {
  const {id} = useParams();

  const [receitas, setReceitas] = useState({});


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



  return(
    <>
     {receitas.name}
    </>
  )

}