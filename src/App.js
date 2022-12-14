import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile";
import { ErrorPage } from "./pages/ErrorPage";
import {Receitas} from "./pages/Receita"
import { ProtectedRoute } from "./components/ProtectedRoute";
import { CriarReceita } from "./pages/CriarReceita";

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
          <Route path="/receitas" element={<Receitas/>}/>
          <Route path="/criarreceita" element={<ProtectedRoute component={CriarReceita} />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
