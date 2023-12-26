const {server} = require("./app");
const PORT = 3001;
const {conn} = require("./DB_connection");
const axios = require("axios");
const {Character} = require("./DB_connection");

const listen = server.listen(PORT, () => {
  console.log(`Server raised in port: ${PORT}`);
});

(async () => {
  await conn.sync({force: false});

  const elements = await Character.count();

  if(elements === 826) {
    return listen;
  } else {
    try {
      let i = 1;

      while(i < 827) {
        const {data} = await axios(`https://rym2.up.railway.app/api/character/${i}?key=pi-dfhenaotigreros`)
        if(data) {
          await Character.create({
            id: data.id,
            name: data.name,
            status: data.status,
            species: data.species,
            type: data.type,
            gender: data.gender,
            origin: data.origin.name,
            location: data.location.name,
            image: data.image,
            episode: data.episode
          });
          i++
        };
      };
    } catch (error) {
      console.error(error.message);
    };
    return listen;
  };
})();







