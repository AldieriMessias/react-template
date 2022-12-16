import { useState, useEffect } from "react"
import { api } from "../../api/api"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export function CriarReceita(){

    const navigate = useNavigate()

    const[form, setForm] = useState({
        name:"",
        ingredientes:"",
        modoDePreparo:"",
        tempoDePreparo:"",

    })


    const [img, setImg] = useState("");

    function handleChange(e) {
      setForm({ ...form, [e.target.name]: e.target.value });
    }


  
    function handleImage(e) {
      setImg(e.target.files[0]);
    }
  
    async function handleUpload() {
      try {
        const uploadData = new FormData();
        uploadData.append("picture", img);
  
        const response = await api.post("/upload-image", uploadData);
  
        return response.data.url;
      } catch (error) {
        console.log(error);
      }
    }
  
    async function handleSubmit(e) {
      e.preventDefault();
  
      try {
        const imgURL = await handleUpload();
        await api.post("/receitas", { ...form, img: imgURL });
  
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  
    

    

    // async function handleSubmit(e){
    //     e.preventDefault()

    //     try{
    //         await api.post("/receitas", form)

    //         // navigate("/receitas")

    //     }catch(err){
    //         console.log(err)
    //     }
    // }



    return (
        <>

<Link to="/">
    <button>Início</button>
  </Link>

        <div>

                <form onSubmit={handleSubmit}>
                <label htmlFor="input-name">Nome da receita:</label>
                <input
                  id="input-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />

                <label htmlFor="formImg">Sua foto de perfil:</label>
                <input type="file" id="formImg" onChange={handleImage} /> 

                <label htmlFor="input-ingredientes">Ingredientes:</label>
                <input
                    id="input-ingredientes"
                  type="text"
                  name="ingredientes"
                  value={form.ingredientes}
                  onChange={handleChange}
                />
                  <label htmlFor="input-modoDePreparo">Modo de preparo:</label>
                <input
                    id="input-modoDePreparo"
                  type="text"
                  name="modoDePreparo"
                  value={form.modoDePreparo}
                  onChange={handleChange}
                />
                <label htmlFor="input-tempoDePreparo">Tempo de preparo:</label>
                <input
                    id="input-tempoDePreparo"
                  type="text"
                  name="tempoDePreparo"
                  value={form.tempoDePreparo}
                  onChange={handleChange}
                />
                <button type="submit">Enviar!</button>
              </form>

              </div>
      </>
    )
}