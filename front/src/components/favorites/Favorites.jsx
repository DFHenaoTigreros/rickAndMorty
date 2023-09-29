import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import Cards from "../cards/Cards";
import {filterCards, orderCards} from "../../redux/actions/actions";
import Select from "../select/Select";

const Favorites = () => {
  const {myFavorites} = useSelector((state) => state);

  const dispatch = useDispatch();

  const [aux, setAux] = useState(false)

  const handleChange = (event) => {
    if (event.target.name === "filter") {
      dispatch(filterCards(event.target.value));
    } else {
      dispatch(orderCards(event.target.value));
      setAux(true);
    }
  };
 
  return (
    <div>
      <Select
        name="order"
        options={["Ascendente", "Descendente"]}
        handleChange={handleChange}
      />
      <Select
          name="filter"
          options={["All", "Male", "Female", "Genderless", "unknown"]}
          handleChange={handleChange}
      />
      <Cards characters={myFavorites}/>
    </div>
  )
}

export default Favorites;
