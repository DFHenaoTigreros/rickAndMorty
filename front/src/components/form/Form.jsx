import axios from "axios";
import {useState} from "react";
import {useNavigate, Link, useLocation} from "react-router-dom";
import validation from "./validation";
import "./Form.css";

const Form = () => {
  const navigate = useNavigate();

  const {pathname} = useLocation();

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    setUserData({...userData, [event.target.name]: event.target.value});
    setErrors(validation({...userData, [event.target.name]: event.target.value}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login();
  };

  const login = async () => {
    try {
      const { email, password } = userData;
      pathname === "/login" ? await axios(`http://localhost:3001/rickandmorty/login/?email=${email}&password=${password}`) : await axios.post("http://localhost:3001/rickandmorty/login/", userData);
      const {access} = data;
      setAccess(data);
      access && navigate('/');
    } catch (error) {
      throw Error(error.message);
    }
  }

  return (
    <div className="container">
      <form className={"form"} onSubmit={handleSubmit}>
        <img src="../img/login.png" alt="RickandMorty" className="login-image"/>

        <label htmlFor="email" className="label">Email: </label>
        <input type="email" name="email" value={userData.email} onChange={handleChange} className="input"/>
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="password" className="label">Password: </label>
        <input type="password" name="password" value={userData.password} onChange={handleChange} className="input"/>
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit" className="submit-button" disabled={!userData.email || !userData.password || errors.email || errors.password}>Submit
        </button>

        {pathname === "/login" ? <p className="error">{"Si no tienes cuenta "}<Link to="/register">Registrate</Link></p> : <p className="error">{"Si ya tienes cuenta "}<Link to="/login">Logueate</Link></p>}
      </form>
    </div>
  );
};

export default Form;