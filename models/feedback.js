const mongoose = require("mongoose")
var Feedback = mongoose.model("feedback", {             
    fName: String,
    lName: String,
    eMail: String,
    fText: String
})


module.exports ={
    Feedback
}