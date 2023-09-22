import {Link} from "react-router-dom";

const Card = ({id, name, species, gender, image, onClose}) => {
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <Link to={`/detail/${id}`} >
            <img src={image} alt={name} />
         </Link>
      </div>
   );
};

export default Card;
