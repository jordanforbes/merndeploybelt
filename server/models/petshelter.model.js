console.log("petshelter.model.js");

const mongoose = require("mongoose");

const PetShelterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be 3 characters or more"]
    },
    type: {
        type: String,
        required: [true, "Type is required"],
        minlength: [3, "Type must be 3 characters or more"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be 3 characters or more"]
    },
    skill1:{type: String},
    skill2:{type: String},
    skill3:{type: String},
    points:{type: Number, default: 0}
})

module.exports = mongoose.model("PetShelter", PetShelterSchema )