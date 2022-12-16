import { Link } from "react-router-dom";
import {Receitas} from "../Receita"
import background from "../../components/Img/foto.jpg"
import style from "./style.module.css"




export function Home() {
  return (
  <>
  

    <div style={{ backgroundImage: `url(${background})`, height: "170vh" }}>      
      
      <div className={style.btnUp}>
      <Link to="/login">
          <button>Entrar</button>
        </Link>
       
        <Link to="/signup">
          <button>Cadastrar</button>
        </Link>
        
        
       
        <Link to="/profile">
          <button>Perfil</button>
        </Link>

        
        
        <Link to="/criarreceita">
          <button>Criar receita</button>
        </Link>


        <Link to="/receitas">
          <button>Receitas</button>
        </Link>

        </div>
          
          <h1>Receitas Proj3</h1>

          <Receitas/>
        
        </div>

    


  </>
  )
}
