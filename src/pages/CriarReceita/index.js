import { useState, useEffect } from "react"
import { api } from "../../api/api"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./style.module.css"
import background from "../../components/Img/img4.jpeg"


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
        <div  style={{ backgroundImage: `url(${background})`, height: "170vh" }}>

        <Link to="/">
            <button>Início</button>
        </Link>

        <div className={style.form}>

                <form onSubmit={handleSubmit}   className={style.form}>
                <label htmlFor="input-name"  className={style.titles}>Nome da receita:</label>
                <input
                  id="input-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="ex: pão de queijo"
                />

                <label htmlFor="formImg" className={style.titles}>Sua foto de perfil:</label>
                <input type="file" id="formImg" onChange={handleImage} /> 

                <label htmlFor="input-ingredientes" className={style.titles}>Ingredientes:</label>
                <input
                    id="input-ingredientes"
                  type="text"
                  name="ingredientes"
                  value={form.ingredientes}
                  onChange={handleChange}
                  placeholder="ex:queijo, farinha"
                />
                  <label htmlFor="input-modoDePreparo" className={style.titles}>Modo de preparo:</label>
                <input
                    id="input-modoDePreparo"
                  type="text"
                  name="modoDePreparo"
                  value={form.modoDePreparo}
                  onChange={handleChange}
                  placeholder="ex:misturar tudo"
                />
                <label htmlFor="input-tempoDePreparo" className={style.titles}>Tempo de preparo:</label>
                <input
                    id="input-tempoDePreparo"
                  type="text"
                  name="tempoDePreparo"
                  value={form.tempoDePreparo}
                  onChange={handleChange}
                  placeholder="ex: 25 minutos"
                />
                <button type="submit">Enviar!</button>
              </form>

              </div>
      </div>
    )
}