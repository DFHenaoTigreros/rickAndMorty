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
      <div className="card">
         {
            isFav ? (
               <button onClick={handleFavorite}>💚</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         {
            pathname !== "/favorites"
            ? <button onClick={() => onClose(id)}>X</button>
            : ""
         }
         <h2>{name}</h2>
         <Link to={`/detail/${id}`} >
            <img src={image} alt={name} />
         </Link>
      </div>
   );
};

export default Card;
