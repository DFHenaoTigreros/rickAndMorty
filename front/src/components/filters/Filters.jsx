import {useDispatch} from "react-redux";
import {orderCards, filterStatus, filterSpecies, filterGender, filterEpisode} from "../../redux/actions/actions";
import Select from "../select/Select";
import "./Filters.css";

const Filters = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    switch(event.target.name) {
      case "order-cards":
        dispatch(orderCards(event.target.value));
        break;
      case "filter-status":
        dispatch(filterStatus(event.target.value));
        break;
      case "filter-species":
        dispatch(filterSpecies(event.target.value));
        break;
      case "filter-gender":
        dispatch(filterGender(event.target.value));
        break;
      case "filter-episode":
        dispatch(filterEpisode(event.target.value));
        break;
      default:
    };
  };

  return (
    <div className="filters">
      <div>
        <label htmlFor="order-cards">Order Characters:</label>
        <Select 
          name="order-cards"
          options={["A-Z", "Z-A"]}
          handleChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="filter-status">Filter by Status:</label>
        <Select 
          name="filter-status"
          options={["All", "Alive", "Dead", "unknown"]}
          handleChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="filter-species">Filter by Species:</label>
        <Select 
          name="filter-species"
          options={["All", "Alien", "Animal", "Cronenberg", "Disease", "Human", "Humanoid", "Mythological Creature", "Poopybutthole", "Robot", "unknown"]}      
          handleChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="filter-gender">Filter by Gender:</label>
        <Select
          name="filter-gender"
          options={["All", "Female", "Genderless", "Male", "unknown"]}
          handleChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="filter-episode">Filter by Episode:</label>
        <Select
          name="filter-episode"
          options={["All", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51"]}
          handleChange={handleChange}
        />
      </div>
    </div>

  );
};

export default Filters;