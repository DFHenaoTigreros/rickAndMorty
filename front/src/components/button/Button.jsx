import {Link} from "react-router-dom";
import "../nav/Nav";

const Button = ({link, text, className}) => {
  return (
    <Link to={link}>
        <button className={className}>{text}</button>
    </Link>
  )
}

export default Button;