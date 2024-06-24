const {server} = require('../src/app');
const session = require('supertest');
const request = session(server);

describe("Route Tests", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responds with status: 200", async () => {
      const response = await request.get('/rickandmorty/character/1');
      expect(response.statusCode).toBe(200);
    });

    it(`"Responds with an object with the properties: "id", "name", "species", "gender", "status", "origin" e "image"`, async () => {
      const response = await request.get('/rickandmorty/character/1');
      const obj = ["id", "name", "species", "gender", "status", "origin", "image"];
      obj.forEach((prop) => {
        expect(response.body).toHaveProperty(prop);
      })
    });

    it("If there is an error, responds with status: 404", async () => {
      const response = await request.get('/rickandmorty/character/900');
      expect(response.statusCode).toBe(404);
    });
  });

  describe("GET /rickandmorty/login_", () => {
    it("Responds with the access property as true, if the correct information is passed", async () => {
      const response = await request.get("/rickandmorty/login?email=davidhenao3105@gmail.com&password=dafeheti3");
      expect(response.body).toEqual({access: true});
    });

    it("Responds with 'incorrect password' if incorrect information is passed", async () => {
      const response = await request.get("/rickandmorty/login?email=davidhenao3105@gmail.com&password=dafeheti3.");
      expect(response.text).toBe("incorrect password");
    });
  });

  describe("POST /rickandmorty/fav_", () => {
    it("Responds with an array containing what is sent in the body", async () => {
      const character = {
        id: 1,
        name: "Rick Sanchez",
        image:  "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      };
      const response = await request.post("/rickandmorty/fav").send(character);
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body).toContainEqual(character);
    });

    it("Responds with an array of more than one element, containing what is sent in the body", async () => {
      const character = {
        id: 2,
        name: "Morty Smith",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
      };
      const response = await request.post("/rickandmorty/fav").send(character);
      expect(response.body.length).toBeGreaterThan(1)
    });
  });

  describe("DELETE /rickandmorty/fav/:id_", () => {
    it("Responds with an array of more than zero elements after deletion", async () => {
      const response = await request.delete("/rickandmorty/fav/1");
      expect(response.body.length).toBeGreaterThan(0);
    });
  });
});