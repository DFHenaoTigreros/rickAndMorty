const app = require('../src/app');
const session = require('supertest');
const request = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await request.get();
      expect().to ();
    });

    it(`"Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"`, async () => {
      const response = await request.get();
      expect().to ();
    });

    it("Si hay un error responde con status: 500", async () => {
      const response = await request.get();
      expect().to ();
    });
  });

  describe("_GET /rickandmorty/login_", () => {
    it("", async () => {
      const response = await request.get();
      expect().to ();
    });

    it("", async () => {
      const response = await request.get();
      expect().to ();
    });
  });

  describe("_POST /rickandmorty/fav_", () => {
    it("", async () => {
      const response = await request.post();
      expect().to ();
    });

    it("", async () => {
      const response = await request.post();
      expect().to ();
    });
  });

  describe("_DELETE /rickandmorty/fav/:id_", () => {
    it("", async () => {
      const response = await request.post();
      expect().to ();
    });

    it("", async () => {
      const response = await request.post();
      expect().to ();
    });
  });
});