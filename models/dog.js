const mongoose = require("mongoose")

var Dog = mongoose.model("dog", {             
    name: String,
    status: String,
    breed: String,
    height: Number,
    weight: Number,
    gender: String, 
    birthday: String,
    conditions: String,
    description: String,
    energy_level: String,
    ease_of_training: String,
    grooming_requirements: String,
    affection_needs: String,
    image: String
})


module.exports ={
    Dog
}
