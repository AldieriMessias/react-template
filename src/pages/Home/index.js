import { Link } from "react-router-dom";
import {Receitas} from "../Receita"


export function Home() {
  return (
  <>
  
  <h1>Tamo na home!</h1>
    <div>      
      <Link to="/login">
          <button>Entrar</button>
        </Link>
       
        <Link to="/signup">
          <button>Cadastrar</button>
        </Link>
        
       
        <Link to="/profile">
          <button>Perfil</button>
        </Link>

        <Link to="/receitas">
          <button>Receitas</button>
        </Link>

        <Link to="/comentarios">
          <button>Comentarios</button>
        </Link>
    </div>

<Receitas/>


  </>
  )
}
