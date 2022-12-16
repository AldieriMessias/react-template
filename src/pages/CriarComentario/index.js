import { useState, useEffect } from "react"
import { api } from "../../api/api"
import { useNavigate, useParams } from "react-router-dom";
import style from "./style.module.css"


export function CriarComentario(){

    const navigate = useNavigate()

    const[form, setForm] = useState({
        comentario:"",
        

    })

    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value });
    }

const {id} = useParams()


    async function handleSubmit(e){
        e.preventDefault()

        try{
            await api.post(`/comentarios/${id}/comentario`, form)
            window.location.reload();



        }catch(err){
            console.log(err)
        }
    }



    return (
        <> <div className={style.comentario} >  
        <form onSubmit={handleSubmit}>
        <label htmlFor="input-comentario"><strong className={style.comentarioT} >Comentario:</strong></label>
        <input
          id="input-comentario"
          type="text"
          name="comentario"
          value={form.comentario}
          onChange={handleChange}
        />
     
        <button type="submit">Enviar!</button>
      </form>

      </div>
      </>
    )
}