import { useState, useEffect } from "react"
import { api } from "../../api/api"
import { useNavigate } from "react-router-dom";


export function CriarComentario(){

    const navigate = useNavigate()

    const[form, setForm] = useState({
        comentario:"",
        

    })

    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e){
        e.preventDefault()

        try{
            await api.post("/comentarios", form)

            navigate("/comentarios")

        }catch(err){
            console.log(err)
        }
    }



    return (
        <>
        <form onSubmit={handleSubmit}>
        <label htmlFor="input-comentario">Comentario:</label>
        <input
          id="input-comentario"
          type="text"
          name="comentario"
          value={form.comentario}
          onChange={handleChange}
        />
     
        <button type="submit">Enviar!</button>
      </form>
      </>
    )
}