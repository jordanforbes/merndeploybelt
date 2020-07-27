console.log("petshelter.routes.js");

const PetShelter = require("../controllers/petshelter.controller");

module.exports = (app) => {
  app.get("/api/petshelter", PetShelter.getAll);
  app.post("/api/petshelter", PetShelter.create);
  app.get("/api/petshelter/:_id", PetShelter.getOne);
  app.put("/api/petshelter/:_id", PetShelter.update);
  app.delete("/api/petshelter/:_id", PetShelter.remove);
};
