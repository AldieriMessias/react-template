import { Link } from "react-router-dom";


export function Home() {
  return (
  <>
  
  <h1>Tamo na home!</h1>;
  
  <Link to="/signup">
    <button>Cadastrar</button>
  </Link>
  
  <Link to="/login">
    <button>Entrar</button>
  </Link>

  <Link to="/profile">
    <button>Perfil</button>
  </Link>

  <Link to="/receitas">
    <button>Receitas</button>
  </Link>


  </>
  )
}
