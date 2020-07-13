const mongoose = require("mongoose")

var User = mongoose.model("user", {             
    username: String,
    password: String,
    email: String
})


module.exports ={
    User
}
