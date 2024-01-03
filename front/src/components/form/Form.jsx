import axios from "axios";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate, Link, useLocation} from "react-router-dom";
import {log} from "../../redux/actions/actions";
import validation from "./validation";
import "./Form.css";

const Form = () => {
  const navigate = useNavigate();

  const {pathname} = useLocation();

  const dispatch = useDispatch();

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

      if (pathname === "/login") {
        const {data} = await axios(`/rickandmorty/login/?email=${email}&password=${password}`);
        const {access} = data;
        dispatch(log(access));
        data && navigate("/");
      } else if (pathname === "/register") {
        await axios.post("/rickandmorty/login/", userData);
      };
    } catch (error) {
      throw Error(error.message);
    };
  };

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

        <button type="submit" className="submit-button" disabled={!userData.email || !userData.password || errors.email || errors.password}>{pathname === "/login" ? "Login" : "Register"}
        </button>

        {pathname === "/login" ? <p className="error">{"If you do not have an account "}<Link to="/register">Sign up</Link></p> : <p className="error">{"If you have an account "}<Link to="/login">Log in</Link></p>}
        
      </form>
    </div>
  );
};

export default Form;