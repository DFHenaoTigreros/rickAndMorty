import {useLocation} from "react-router-dom";
import Card from "../card/Card";
import Filters from "../filters/Filters";
import "./Cards.css";

const Cards = ({characters, onClose}) => {
   const {pathname} = useLocation()
   return(
      <div>
         {pathname !== "/favorites" && <Filters />}
         <div className="cards">
            {characters.map(({id, name, image}) => {
               return <Card 
                  key={id}
                  id={id}
                  onClose={onClose}
                  name={name}
                  image={image}
               />
            })}
         </div>
      </div>
   );
};

export default Cards;





 
