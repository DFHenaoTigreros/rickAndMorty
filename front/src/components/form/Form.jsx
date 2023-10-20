import {useState} from "react";
import validation from "./validation";
import "./Form.css";

const Form = ({login}) => {
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
    login(userData)
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

        <button type="submit" className="submit-button" disabled={!userData.email || !userData.password || errors.email || errors.password}>Submit
        </button>
      </form>
    </div>
  );
};

export default Form;