import { useState } from "react";
import validation from "./validation";

const Form = ({login}) => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    setUserData({...userData, [event.target.name]: event.target.value});
    setErrors(validation({...userData, [event.target.name]: event.target.value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    login(userData)
  }

  return (
    <form>
      <label htmlFor="email">Email: </label>
      <input type="email" name="email" value={userData.email} onChange={handleChange}/>
      {errors.email && <p style={{color: "red"}}>{errors.email}</p>}

      <hr style={{ borderStyle: "none"}} />

      <label htmlFor="password">Password: </label>
      <input type="password" name="password" value={userData.password} onChange={handleChange}/>
      {errors.password && <p style={{color: "red"}}>{errors.password}</p>}

      <hr style={{ borderStyle: "none"}} />

      <button onClick={handleSubmit} type="submit" disabled={!userData.email || !userData.password || errors.email || errors.password}>Submit</button>
    </form>
  );
};

export default Form;