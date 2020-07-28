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
//   getAll(req, res) {
//     PetShelter.find()
//       .sort({"name":1})
//       .exec((error, petshelter) => {
//             if (error) {
//                 throw error; 
//                 res.json(error)
//             }else{
//                 res.json(petshelter);
//             }
//         })
    //   .catch((errors) => res.json(errors));
//   }
  getAll(req, res){
      PetShelter.find().sort({name:1})
        .then(pet => res.json(pet))
        .catch(err=> res.json(err))
  }
//   data.find().sort({"id": 1}).exec(function(err,docs){
//   if (err) throw err;
//   res.json(docs);
// })
  getOne(req, res) {
    PetShelter.findOne({ _id: req.params._id })
      .then((activity) => res.json(activity))
      .catch((error) => res.json(errors));
  }
  update(req, res) {
    PetShelter.findByIdAndUpdate({ _id: req.params._id }, req.body, {
      runValidators: true,
    })
      .then((results) => res.json({ msg: "ok", results: results}))
      .catch((errors) => res.json(errors));
  }

//   var id = req.params.id;
// var client = req.body;
// Client.update({_id: id}, client, { runValidators: true }, function(err) {
//   ....
// });
  remove(req, res) {
    PetShelter.findByIdAndRemove({ _id: req.params._id })
      .then(() => res.json({ msg: "ok" }))
      .catch((errors) => res.json(errors));
  }
}

module.exports = new PetShelterController();
