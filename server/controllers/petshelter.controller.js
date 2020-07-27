console.log("petshelter.controller.js");

const PetShelter = require("../models/petshelter.model");

class PetShelterController {
  create(req, res) {
    const newPetShelter = new PetShelter(req.body);
    newPetShelter
      .save()
      .then(() => res.json(newPetShelter))
      .catch((errors) => res.json(errors));
  }
  getAll(req, res) {
    PetShelter.find()
      .sort("start")
      .then((petshelter) => res.json(petshelter))
      .catch((errors) => res.json(errors));
  }
  getOne(req, res) {
    PetShelter.findOne({ _id: req.params._id })
      .then((activity) => res.json(activity))
      .catch((error) => res.json(errors));
  }
  update(req, res) {
    PetShelter.findByIdAndUpdate({ _id: req.params._id }, req.body, {
      runValidators: true,
    })
      .then(() => res.json({ msg: "ok" }))
      .catch((errors) => res.json(errors));
  }
  remove(req, res) {
    PetShelter.findByIdAndRemove({ _id: req.params._id })
      .then(() => res.json({ msg: "ok" }))
      .catch((errors) => res.json(errors));
  }
}

module.exports = new PetShelterController();
