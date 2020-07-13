const mongoose = require("mongoose")

var Request = mongoose.model("request", {             
    reqName: String,
    reqEmail: String,
    reqDog: String,
    reqDogPic: String,
    reqStatus: String
})


module.exports ={
    Request
}
