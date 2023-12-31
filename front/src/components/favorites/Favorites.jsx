import {useSelector} from "react-redux";
import Cards from "../cards/Cards";

const Favorites = () => {

  const {myFavorites} = useSelector((state) => state);
 
  return (
    <div>
      <Cards characters={myFavorites}/>
    </div>
  )
}

export default Favorites;
