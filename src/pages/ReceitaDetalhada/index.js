import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../api/api";
import { CriarComentario } from "../CriarComentario";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import style from "./style.module.css"
import background from "../../components/Img/img3.jpg"
import {Button} from "react-bootstrap";


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
    
    
    <div style={{ backgroundImage: `url(${background})`, height: "170vh" }}>

    <Link to="/">
          <button>Início</button>
        </Link>
       
        
      
   
    <div >
    <Card className={style.receita}>
     <Card.Title ><strong className={style.title}>{receitas.name}</strong></Card.Title>
     <img className={style.img} src={receitas.img} alt="Teste"/>
     <Card.Text>
     <p><strong>Ingredientes: </strong>{receitas.ingredientes}</p>
     <p><strong>Modo de preparo:</strong>{receitas.modoDePreparo}</p>
     <p><strong>Tempo de preparo:</strong>{receitas.tempoDePreparo}</p>
     </Card.Text>
     </Card>
      
      <strong className={style.comentario1} >Comentarios:</strong>
      <br></br>
     
     {receitas.comentario.map((cE) => {
      return(
      <strong ><p className={style.comentario}>{cE.comentario}</p></strong>)
     })}
     
         </div>

     <CriarComentario/>
      
      


     </div>
    </>
  )

}