import {Link} from "react-router-dom";
import "../nav/Nav";

const Button = ({link, text}) => {
  return (
    <Link to={link}>
        <button className="nav-button">{text}</button>
    </Link>
  )
}

export default Button;