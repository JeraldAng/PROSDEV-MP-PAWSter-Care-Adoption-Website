const mongoose = require("mongoose")

var Request = mongoose.model("request", {             
    reqDate: Date,
    reqUserID: String,
    reqName: String,
    reqEmail: String,
    reqAddress: String,
    reqNum: String,
    reqDogID: String,
    reqDog: String,
    reqBreed: String,
    reqStatus: String
})


module.exports ={
    Request
}
