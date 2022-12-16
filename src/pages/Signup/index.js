import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./style.module.css"
import background from "../../components/Img/img5.png"

export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
      await api.post("/user/signup", { ...form, img: imgURL });

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (

    <div style={{ backgroundImage: `url(${background})`, height: "95vh" }}>
      <Link to="/">
        <button>Início</button>
      </Link>

      <form onSubmit={handleSubmit} className={style.form} >
        <label htmlFor="formName" className={style.titles}>Nome:</label>
        <input
          id="formName"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
        />
        {/* <label htmlFor="formImg">Sua foto de perfil:</label>
        <input type="file" id="formImg" onChange={handleImage} /> */}

        <label htmlFor="formEmail" className={style.titles}>E-mail:</label>
        <input
          id="formEmail"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <label htmlFor="formPassword" className={style.titles}>Senha:</label>
        <input
          id="formPassword"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        <label htmlFor="formConfirmPassword" className={style.titles}>Confirmação de senha</label>
        <input
          id="formConfirmPassword"
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Cadastrar</button>
      </form>

    </div>
  );
}
