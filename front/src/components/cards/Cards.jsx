import Card from "../card/Card";

const Cards = ({characters, onClose}) => {
   return( 
      <div>
         {characters.map(({id, name, species, gender, image}) => {
            return <Card 
               key={id}
               id={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose={onClose}
            />
         })}
      </div>
   );
};

export default Cards;





 
