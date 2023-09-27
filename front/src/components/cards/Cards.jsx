import Card from "../card/Card";
import "./Cards.css";

const Cards = ({characters, onClose}) => {
   return( 
      <div className="cards">
         {characters.map(({id, name, image, gender}) => {
            return <Card 
               key={id}
               id={id}
               onClose={onClose}
               name={name}
               image={image}
               gender={gender}
            />
         })}
      </div>
   );
};

export default Cards;





 
