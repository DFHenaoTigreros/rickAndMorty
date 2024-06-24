const {server} = require('../src/app');
const session = require('supertest');
const request = session(server);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await request.get('/rickandmorty/character/1');
      expect(response.statusCode).toBe(200);
    });

    it(`"Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"`, async () => {
      const response = await request.get('/rickandmorty/character/1');
      const obj = ["id", "name", "species", "gender", "status", "origin", "image"];
      obj.forEach((prop) => {
        expect(response.body).toHaveProperty(prop);
      })
    });

    it("Si hay un error responde con status: 404", async () => {
      const response = await request.get('/rickandmorty/character/900');
      expect(response.statusCode).toBe(404);
    });
  });

  describe("_GET /rickandmorty/login_", () => {
    it("Responde true la propiedad access, si se pasa la información correcta", async () => {
      const response = await request.get("/rickandmorty/login?email=davidhenao3105@gmail.com&password=dafeheti3");
      expect(response.body).toEqual({access: true});
    });

    it("Responde false la propiedad access, si se pasa la información incorrecta", async () => {
      const response = await request.get("/rickandmorty/login?email=davidhenao3105@gmail.com&password=dafeheti3.");
      expect(response.text).toBe("incorrect password");
    });
  });

  describe("_POST /rickandmorty/fav_", () => {
    it("Responde con un arreglo, lo que envíes por body", async () => {
      const character = {
        id: 1,
        name: "Rick Sanchez",
        image:  "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      };
      const response = await request.post("/rickandmorty/fav").send(character);
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body).toContainEqual(character);
    });

    it("Responde con un arreglo de mas de un elemento, lo que envíes por body", async () => {
      const character = {
        id: 2,
        name: "Morty Smith",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
      };
      const response = await request.post("/rickandmorty/fav").send(character);
      expect(response.body.length).toBeGreaterThan(1)
    });
  });

  describe("_DELETE /rickandmorty/fav/:id_", () => {
    it("", async () => {
      const response = await request.delete("/rickandmorty/fav/1");
      expect(response.body.length).toBeGreaterThan(0);
    });
  });
});