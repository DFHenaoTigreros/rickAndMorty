import {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import {addFav, removeFav} from "../../redux/actions/actions";
import "./Card.css"

const Card = ({id, onClose, name, image, gender}) => {
   const dispatch = useDispatch();

   const [isFav, setIsFav] = useState(false);

   const {myFavorites} = useSelector((state) => state);

   const {pathname} = useLocation()

   const handleFavorite = () => {
      if (isFav === true) {
         setIsFav(false);
         dispatch(removeFav(id));
      };
      if (isFav === false) {
         setIsFav(true);
         dispatch(addFav({id, onClose, name, image, gender}));
      }
   }

   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className="card pass">
         {
            isFav ? (
               <button className="favorite" onClick={handleFavorite}>💚</button>
            ) : (
               <button className="favorite" onClick={handleFavorite}>🤍</button>
            )
         }
         {
            pathname !== "/favorites"
            ? <button className="close" onClick={() => onClose(id)}>X</button>
            : ""
         }
         <h2 className="name">{name}</h2>
         <Link to={`/detail/${id}`} >
            <img className="image" src={image} alt={name} />
            <button className="number">{id}</button>
         </Link>
      </div>
   );
};

export default Card;
