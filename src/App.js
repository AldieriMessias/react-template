import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile";
import { ErrorPage } from "./pages/ErrorPage";

import { ProtectedRoute } from "./components/ProtectedRoute";
import { CriarReceita } from "./pages/CriarReceita";
import { CriarComentario } from "./pages/CriarComentario";
import { Comentarios } from "./pages/Comentario";
import {TodasReceitas} from "./pages/TodasReceitas"
import { ReceitaDetalhada } from "./pages/ReceitaDetalhada";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={<ProtectedRoute component={Profile} />}
          />

          <Route path="*" element={<ErrorPage />} />
          <Route path="/receitas" element={<TodasReceitas/>}/>
          <Route path="/receitas/:id" element={<ReceitaDetalhada/>}/>
          <Route path="/criarreceita" element={<ProtectedRoute component={CriarReceita} />} />
          <Route path="/criarcomentario" element={<ProtectedRoute component={CriarComentario} />} />
          <Route path="/comentarios" element={<Comentarios />} />
          

        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
