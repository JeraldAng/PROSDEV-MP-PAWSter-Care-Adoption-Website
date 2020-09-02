const express = require("express")
const bodyparser = require("body-parser")
const session = require("express-session")
const cookieparser = require("cookie-parser")
const mongoose = require("mongoose")
const multer = require("multer")
const hbs = require("hbs")
const {User} = require("./models/user.js")
const {Dog} = require("./models/dog.js")
const {Feedback} = require("./models/feedback.js")
const {Request} = require("./models/request.js")
var upload = multer({dest: './public/uploads/'})
var CryptoJS = require('crypto-js')
var PORT = process.env.PORT || 3000;
var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    "mongodb://localhost:27017/PAWSter_Care_db";

const app = express()
const urlencoder = bodyparser.urlencoded({
    extended: false
})

mongoose.Promise = global.Promise
mongoose.connect(uristring, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => {
console.log("Connected to Database");
}).catch((err) => {
console.log("Not Connected to Database ERROR! ", err);
});

hbs.registerHelper('ifCond', function (v1, operator, v2, options) {
    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '!=':
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '!==':
            return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
});

hbs.registerHelper("setVar", function(varName, varValue, options) {
  options.data.root[varName] = varValue;
});

User.findOne({
         username: "admin"
         }, (err, doc)=>{
            if(err){
                res.send(err)
            }
            else if(doc){
            }
            else{
                var user = {
                username: "admin",
                password: CryptoJS.MD5("1234").toString(),
                email: "admin@admin.com",
            }

            User.create(user, function(e) {
                if (e) {
                    throw e;
                }
            });
            }
})


app.use(express.static(__dirname + "/public"))
app.use(session({
    secret: "secretname",
    resave: true, 
    saveUninitialized: true
}))

hbs.registerPartials(__dirname + "/views/partials")

app.get(["/", "/home", "/homepage"], (req, res)=>{                                                          
    if (req.session.username == "admin"){
       res.render("admin_main.hbs", {
            username: req.session.username
        })
    }
    else{
        Feedback.aggregate([
            {$sample: {size: 5}}
        ], (err, doc)=>{
                if(err){
                    res.send(err)
                }
                else{                                 
                    if (req.session.username){
                        res.render("../views/homepage.hbs", {
                            username: req.session.username,
                            feedback: doc
                        })
                    }
                    else{
                        res.render("../views/homepage.hbs", {
                            feedback: doc
                        })
                    }
                }
        }) 
    }
})

app.get("/signout", (req, res)=>{                                                          
        req.session.username = "";
        res.redirect("/home")
})

app.get("/dogs", (req, res)=>{
        Dog.find({
        
        }, (err, doc)=>{
            if(err){
                res.send(err)
            }
            else{                                 
                res.render("../views/meet_the_dogs.hbs", {
                    username: req.session.username,
                    db: doc
                })
            }
        })
})


app.get("/check", (req, res)=>{                // just find the user given the id
    console.log("GET /check_dog/" + req.query.id)
    
    Dog.findOne({
        _id: req.query.id                     // just get the query, not body
    }, (err, doc)=>{
        if(err){
            res.send(err)
        }
        else{                                 // send all details of the user to edit.hbs
            res.render("../views/check_dog.hbs", {
                username: req.session.username,
                dog: doc
            })
        }
    })
})

app.get("/filter", (req, res)=>{
    console.log(req.query.id)
    Dog.find({
        }, (err, doc)=>{
            if(err){
                res.send(err)
            }
            else{                                 
                res.render("../views/meet_the_dogs.hbs", {
                    username: req.session.username,
                    db: doc,
                    selectbreed: req.query.id
                })
            }
        })
})

app.get("/policies", (req, res)=>{
    res.render("../views/policies.hbs", {
        username: req.session.username
    })
})

app.get("/protocols", (req, res)=>{
    res.render("../views/protocols.hbs", {
        username: req.session.username
    })
})

app.get("/contact", (req, res)=>{
    res.render("../views/contact.hbs", {
        username: req.session.username
    })
})

app.get("/feedbackform", (req, res)=>{
    res.render("../views/feedbackform.hbs", {
        username: req.session.username
    })
})

app.get("/requestform", (req, res)=>{
    if (req.session.username){
        res.render("../views/requestform.hbs", {
            username: req.session.username
        })
    }
    else
        res.redirect("signup.html");
})

app.get("/profile", (req, res)=>{
    
    if (req.session.username){
        User.findOne({
            username: req.session.username
        }, (err, doc)=>{
            if(err){
                res.send(err)
            }
            else{
                email = doc.email
                Request.find({
                    reqUserID: doc._id
                }, (err, doc)=>{
                    if(err){
                        res.send(err)
                    }
                    else{
                        reqList = doc
                        dogList = doc.map(element => element.reqDogID)  // get all dog IDs

                        Dog.find({
                            '_id': { $in: dogList} // match dog IDs 
                        }, (err, doc)=>{
                            if(err){
                                res.send(err)
                            }
                            else{  
                                res.render("../views/profile.hbs", {
                                    username: req.session.username,
                                    email: email,
                                    reqList: reqList,
                                    dog: doc        // return only requested dogs
                                })
                            }
                        }
                    )
                }
            }) 
        }
        })
    }
    else{
        res.redirect("signup.html")
    }
})
app.get("/request_dog", (req, res)=>{
    console.log(req.query.id)
    
    if (req.session.username){
        User.findOne({
            username: req.session.username
        }, (err, doc)=>{
            if(err){
                res.send(err)
            }
            else{
                    userID = doc._id
                    email = doc.email
                    Dog.findOne({
                        _id: req.query.id                     
                    }, (err, doc)=>{
                        if(err){
                            res.send(err)
                        }
                        else{
                            selected = doc
                            Dog.find({
                                '_id': { $ne: doc._id}
                            }, (err, doc)=>{
                                if(err){
                                    res.send(err)
                                }
                                else{                                 
                                        res.render("../views/requestform.hbs", {
                                        username: req.session.username,        
                                        currentdog: selected,
                                        email: email,
                                        userID: userID,
                                        dogs: doc    
                                    })
                                }
                            })
                        }
                    })
            }
        })
    }
    else{
       res.redirect("signup.html") 
    }
})

app.get("/faq", (req, res)=>{
    res.render("../views/faq.hbs", {
        username: req.session.username
    })
})

app.get("/aboutus", (req, res)=>{
    res.render("../views/aboutus.hbs", {
        username: req.session.username
    })
})

app.get("/editprofile", (req, res)=>{
    if(req.session.username){
        User.findOne({
            username: req.session.username
        }, (err, doc)=>{
            if(err){
                res.send(err)
            }
            else{
                res.render("../views/edit_profile.hbs", {
                    username: req.session.username,        
                    email: doc.email
                })
            }
        })
    }
    else{
        res.redirect("signup.html")
    }
})

app.get("/admin_main", (req, res)=>{
    if(req.session.username == "admin"){
        Request.find({
            
        }, (err, doc)=>{
            if(err){
                res.send(err)
            }
            else{ 
                requests = doc
                Dog.find({      
                    
                }, (err, doc)=>{
                    if(err){
                        res.send(err)
                    }
                    else{
                        res.render("../views/admin_main.hbs", {
                            username: req.session.username,
                            dogs: doc,
                            requests: requests
                        })
                    }
                }).sort({ _id: -1 })
            }
        }).sort({ _id: -1 }).limit(5)
    }
    else{
        res.redirect("error.html")
    }
})

app.get("/admin_dogs", (req, res)=>{    
    if(req.session.username == "admin"){
        Dog.find({

        }, (err, doc)=>{
            if(err){
                res.send(err)
            }
            else{                                 
                res.render("../views/admin_dogs.hbs", {
                    db: doc
                })
            }
        })
    }
    else{
        res.redirect("error.html")
    }
})

app.get("/admin_add_dog", (req, res)=>{
    if(req.session.username == "admin"){
        res.render("../views/admin_add_dog.hbs", {
            username: req.session.username
        })
    }
    else{
        res.redirect("error.html")
    }
})


app.get("/edit", (req, res)=>{                // just find the user given the id
    if (req.session.username == "admin"){
        console.log("GET /admin_edit_dog/" + req.query.id)

        Dog.findOne({
            _id: req.query.id                     // just get the query, not body
        }, (err, doc)=>{
            if(err){
                res.send(err)
            }
            else{                                 // send all details of the user to edit.hbs
                res.render("../views/admin_edit_dog.hbs", {
                    dog: doc
                })
            }
        })
    }
    else{
        res.redirect("error.html")
    }
})

app.get("/admin_requests", (req, res)=>{
    if(req.session.username == "admin"){
        Request.find({

        }, (err, doc)=>{
            if(err){
                res.send(err)
            }
            else{  

                res.render("../views/admin_requests.hbs", {
                    requests: doc
           })
        }
        })
    }
    else{
        res.redirect("error.html")
    }
})

app.get("/admin_userTable", (req, res)=>{
    if(req.session.username == "admin"){
        User.find({

        }, (err, doc)=>{
            if(err){
                res.send(err)
            }
            else{                                 
                res.render("../views/admin_userTable.hbs", {
                    users: doc
                })
            }  
        })
    }
    else{
        res.redirect("error.html")
    }
})

app.get("/admin_dogTable", (req, res)=>{
    if(req.session.username == "admin"){
        Dog.find({

        }, (err, doc)=>{
            if(err){
                res.send(err)
            }
            else{                                 
                res.render("../views/admin_dogTable.hbs", {
                    dogs: doc
               })
            }
        })
    }
    else{
        res.redirect("error.html")
    }
})

app.get("/admin_feedbackTable", (req, res)=>{
    if(req.session.username == "admin"){
        Feedback.find({

        }, (err, doc)=>{
            if(err){
                res.send(err)
            }
            else{                                 
                res.render("../views/admin_feedbackTable.hbs", {
                    feedbacks: doc
                })
            }  
        })
    }
    else{
        res.redirect("error.html")
    }
})

app.get("/admin_team", (req, res)=>{
    if(req.session.username == "admin"){
        res.render("../views/admin_team.hbs", {
            username: req.session.username
        })
    }
    else{
        res.redirect("error.html")
    }  
})

app.post("/login", urlencoder, (req, res)=>{
    var username = req.body.uname
    var password = req.body.pass 
         
    User.findOne({
         username, password: CryptoJS.MD5(password).toString()
         }, (err, doc)=>{
            if(err){
                res.send(err)
            }
            else if(doc){
                req.session.username = doc.username
                if (doc.username == 'admin')
                res.redirect("/admin_main")
                else
                res.redirect("/home")
            }
            else{
                res.redirect("/home?error=" + encodeURIComponent('Incorrect_Credential'));
            }
        })
})

app.post("/signup", urlencoder, (req, res)=>{
    var username = req.body.uname
    var password = req.body.pass
    var email = req.body.email
         
    let user = new User({
         username, password: CryptoJS.MD5(password).toString(), email
    })
    
    User.findOne({
        $or: [ 
            {username: username},
            {email: email},    
        ]
         }, (err, doc)=>{
            if(err){
                res.send(err)
            }
            else if(doc){
                if(doc.username == user.username)
                    res.redirect("/signup?error=" + encodeURIComponent('username_taken'));
                else if(doc.email == user.email)
                    res.redirect("/signup?error=" + encodeURIComponent('emailaddress_taken'));
            }
            else{
                user.save().then((doc)=>{
                console.log(doc)                                            // print the user details if successfully saved
                req.session.username = doc.username
                res.render("homepage.hbs", {
                    username: doc.username                                  // get the username to display in the 
                })
            },(err)=>{
                res.send(err)
            }) 
            }
    })
})

app.post("/edit_profile", urlencoder, (req, res)=>{
    var comparename = "null"
    var compareemail = "null"
    var comparepass = "null"
    var currentname = req.session.username
    var currentemail = "null"
    var currentpass = "null"
    var changes = "";
        
    User.findOne({
        username: req.session.username
    }, (err, doc)=>{
        if(err){
            res.send(err)
        }
        else{ 
            currentemail = doc.email
            currentpass = doc.password
    
            // if user did not change username, email, or password, do not compare these to the database
            if (currentname != req.body.uname)
                comparename = req.body.uname
            if (currentemail != req.body.email)
                compareemail = req.body.email
            if (currentpass != CryptoJS.MD5(req.body.pass).toString())
                comparepass = req.body.pass
            
            if(comparename != "null")
                changes += "1"
            if(compareemail != "null")
                changes += "2"
            if(comparepass != "null")
                changes += "3"
            
            User.findOne({
                $or: [ 
                    {username: comparename},
                    {email: compareemail},    
                ]
                 }, (err, doc)=>{
                    if(err){
                        res.send(err)
                    }
                    else if(doc){
                        if(doc.username == req.body.uname){
                            res.redirect("/editprofile?error=" + encodeURIComponent('username_taken'));
                        }
                        else if(doc.email == req.body.email){
                            res.redirect("/editprofile?error=" + encodeURIComponent('emailaddress_taken'));
                        }
                        else{
                            User.updateOne({                              // where clause
                               username: req.session.username 
                            }, {                                       // new info that you want to add
                                username: req.body.uname,
                                email: req.body.email,
                                password: CryptoJS.MD5(req.body.pass).toString()
                            }, (err, doc)=>{
                               if (err){
                                   res.send(err)
                               }
                                else{
                                    req.session.username = req.body.uname
                                    res.redirect("/profile?changes=" + encodeURIComponent(changes));
                                }
                            }),(err)=>{
                            res.send(err)
                            }
                        }
                    }
                    else{
                        User.updateOne({                              // where clause
                               username: req.session.username 
                            }, {                                       // new info that you want to add
                                username: req.body.uname,
                                email: req.body.email,
                                password: CryptoJS.MD5(req.body.pass).toString()
                            }, (err, doc)=>{
                               if (err){
                                   res.send(err)
                               }
                                else{
                                    req.session.username = req.body.uname
                                    res.redirect("/profile?changes=" + encodeURIComponent(changes));
                                }
                            }),(err)=>{
                            res.send(err)
                            }
                    }
                })
            }
    })    
})

app.post("/request", urlencoder, (req, res)=>{
    var reqDate = new Date()
    var reqName = req.body.reqFirst + " " + req.body.reqLast
    var reqEmail = req.body.reqEmail
    var reqAddress = req.body.reqAddress
    var reqStatus = "pending"
    var reqDog = ""
    var reqDogID = req.body.reqDog
    var reqUserID = req.body.reqUserID
    var reqBreed = ""
    
    console.log(reqDog);
    
    if(req.body.reqNum == null)
        var reqNum = ""
    else
        var reqNum = req.body.reqNum 
    
        Request.findOne({
            reqUserID: reqUserID,
            reqDogID: reqDogID,
            reqStatus: reqStatus
        }, (err, doc)=>{
            if(err){
                res.send(err)
            }
            else{
            console.log(" request is found ")    
            isFound = doc
            console.log(isFound, " is found ")
                
            Dog.findOne({
                 _id: reqDogID
                }, (err, doc)=>{
                    if(err){
                        res.send(err)
                    }
                    else{
                        console.log(doc.name, "name of adopted dog");
                        reqDog = doc.name;
                        reqBreed = doc.breed;
                        
                        if(isFound === null){
                        let request = new Request({
                         reqDate, reqUserID, reqName, reqEmail, reqAddress, reqNum, reqDogID, reqDog, reqBreed, reqStatus
                        })

                        request.save().then((doc)=>{
                            console.log(doc)                           // print the user details if successfully saved
                            res.redirect("/profile")
                        },(err)=>{
                            res.send(err)
                        })
                        }
                        else{
                            req.query.id = reqDogID
                            res.redirect("/dogs?error=" + encodeURIComponent('pendingrequest_found'));
                        }
                  }
            }) 
       }
       })

})
app.post("/approve", urlencoder, (req, res)=>{

    console.log(req.body.reqid)
    Request.update({                              
       _id: req.body.reqid 
    }, {                                       
        reqStatus: "approved"
    }, (err, doc)=>{
       if (err){
           res.send(err)
       }
        else{
            res.redirect("/admin_requests")
        }
    }) 
})

app.post("/reject", urlencoder, (req, res)=>{

    console.log(req.body.reqid)
    Request.update({                              
       _id: req.body.reqid 
    }, {                                       
        reqStatus: "rejected"
    }, (err, doc)=>{
       if (err){
           res.send(err)
       }
        else{
            res.redirect("/admin_requests")
        }
    }) 
})



app.post('/admin_add_dog', upload.single('dog_image'), function (req, res, next) {
    if(req.file != undefined){
    var name = req.body.dog_name
    var breed = req.body.dog_breed
    var birthday = req.body.dog_birthday
    var gender = req.body.dog_gender
    var height = req.body.dog_height
    var weight = req.body.dog_weight
    var conditions = req.body.dog_conditions
    var description = req.body.dog_description
    var energy_level = req.body.dog_energy_level
    var ease_of_training = req.body.dog_ease_of_training
    var grooming_requirements = req.body.dog_grooming_requirements
    var affection_needs = req.body.dog_affection_needs
    var image = req.file.filename
    
    let dog = new Dog({
        name, breed, birthday, gender, height, weight, conditions, description, energy_level, ease_of_training, grooming_requirements, affection_needs, image
    })
    
    dog.save().then((doc)=>{
        console.log(doc)                                             
    })    
    res.redirect("/admin_dogs")
    }
    else{
        res.redirect("/admin_dogs")
    }
})

app.post('/admin_edit_dog', upload.single('dog_image'), function (req, res, next) {
    if(req.file != undefined){
    Dog.update({                              // where clause
       _id: req.body.id 
    }, {                                       // new info that you want to add
        name: req.body.dog_name,
        breed: req.body.dog_breed,
        birthday: req.body.dog_birthday,
        gender: req.body.dog_gender,
        height: req.body.dog_height,
        weight: req.body.dog_weight,
        conditions: req.body.dog_conditions,
        description: req.body.dog_description,
        energy_level: req.body.dog_energy_level,
        ease_of_training: req.body.dog_ease_of_training,
        grooming_requirements: req.body.dog_grooming_requirements,
        affection_needs: req.body.dog_affection_needs,
        image: req.file.filename
    }, (err, doc)=>{
       if (err){
           res.send(err)
       }
        else{
            res.redirect("/admin_dogs")
        }
    })
    }
    else{
       Dog.update({                              // where clause
       _id: req.body.id 
    }, {                                       // new info that you want to add
        name: req.body.dog_name,
        breed: req.body.dog_breed,
        birthday: req.body.dog_birthday,
        gender: req.body.dog_gender,
        height: req.body.dog_height,
        weight: req.body.dog_weight,
        conditions: req.body.dog_conditions,
        description: req.body.dog_description,
        energy_level: req.body.dog_energy_level,
        ease_of_training: req.body.dog_ease_of_training,
        grooming_requirements: req.body.dog_grooming_requirements,
        affection_needs: req.body.dog_affection_needs
    }, (err, doc)=>{
       if (err){
           res.send(err)
       }
        else{
            res.redirect("/admin_dogs")
        }
    }) 
    }
})

app.post("/feedbackform", urlencoder, (req, res)=>{
    var fName = req.body.fname
    var lName = req.body.lname
    var eMail = req.body.email
    var fText = req.body.ftext
    
    let feedback = new Feedback({
        fName, lName, eMail, fText
    })
    
    feedback.save().then((doc)=>{
        console.log(doc)                                             
        res.redirect("/home")
    })

})

app.post("/delete", urlencoder, (req, res)=>{
    console.log("POST /delete " + req.body.id)
    Dog.deleteOne({
        _id: req.body.id
    }, (err, doc)=>{
        if (err){
            res.send(err)
        }
        else{
//            res.redirect("/users")
            console.log(doc)
            res.send(doc)
        }
    })
})

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/error.html")
});

app.listen(PORT, function(){                  // read from this port
    console.log("Now listening at port 3000!");
})