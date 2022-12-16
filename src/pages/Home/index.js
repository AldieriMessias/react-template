import { Link } from "react-router-dom";
import { ProtectedRouteAdmin } from "../../components/ProtectedAdminRoute";
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

        
        
        <Link to="/criarreceita">
          <button>Criar receita</button>
        </Link>

        
    </div>

<Receitas/>


  </>
  )
}
