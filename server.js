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


const app = express()
const urlencoder = bodyparser.urlencoded({
    extended: false
})

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost:27017/PAWSter_Care_db", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => {
console.log("Connected to Database");
}).catch((err) => {
console.log("Not Connected to Database ERROR! ", err);
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

app.get("/login", (req,res)=>{
    req.session.username = ""
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/signup", (req,res)=>{
    res.sendFile(__dirname + "/public/signup.html")
})

app.get("/error", (req,res)=>{
    res.sendFile(__dirname + "/public/error.html")
})

app.get(["/", "/home", "homepage"], (req, res)=>{
    if(!req.session.username){                                      // default would be the login page (no account yet)
        res.sendFile(__dirname + "/public/index.html")
    }
    else{                                                           // remember the user who logged in
        res.render("homepage.hbs", {
            username: req.session.username
        })
    }
})

app.get("/dogs", (req, res)=>{
        Dog.find({
        
        }, (err, doc)=>{
            if(err){
                res.send(err)
            }
            else{                                 
                res.render("meet_the_dogs.hbs", {
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
            res.render("check_dog.hbs", {
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
                res.render("meet_the_dogs.hbs", {
                    username: req.session.username,
                    db: doc,
                    selectbreed: req.query.id
                })
            }
        })
})

app.get("/policies", (req, res)=>{
    res.render("policies.hbs", {
        username: req.session.username
    })
})

app.get("/protocols", (req, res)=>{
    res.render("protocols.hbs", {
        username: req.session.username
    })
})

app.get("/contact", (req, res)=>{
    res.render("contact.hbs", {
        username: req.session.username
    })
})

app.get("/feedbackform", (req, res)=>{
    res.render("feedbackform.hbs", {
        username: req.session.username
    })
})

app.get("/requestform", (req, res)=>{
    res.render("requestform.hbs", {
        username: req.session.username
    })
})

app.get("/requests", (req, res)=>{
    User.findOne({
        username: req.session.username
    }, (err, doc)=>{
        if(err){
            res.send(err)
        }
        else{
            Request.find({
                reqEmail: doc.email
            }, (err, doc)=>{
                if(err){
                    res.send(err)
                }
                else{
                      
                    res.render("requests.hbs", {
                        username: req.session.username,        
                        des: doc.description,
                        reqList: doc
                    })
                            
                }
            })
            
        }
    })
       
})

app.get("/request_dog", (req, res)=>{
    console.log(req.query.id)
    
    User.findOne({
        username: req.session.username
    }, (err, doc)=>{
        if(err){
            res.send(err)
        }
        else{
                email = doc.email
                Dog.findOne({
                    _id: req.query.id                     
                }, (err, doc)=>{
                    if(err){
                        res.send(err)
                    }
                    else{   
                        res.render("requestform.hbs", {
                            username: req.session.username,        
                            dog: doc,
                            email: email
                        })
                    }
                })
        }
})
})

app.get("/faq", (req, res)=>{
    res.render("faq.hbs", {
        username: req.session.username
    })
})

app.get("/aboutus", (req, res)=>{
    res.render("aboutus.hbs", {
        username: req.session.username
    })
})

app.get("/editprofile", (req, res)=>{
    console.log(req.session._id)
    res.render("edit_profile.hbs", {
        username: req.session.username
    })
})


app.get("/admin_main", (req, res)=>{
    res.render("admin_main.hbs", {
        username: req.session.username
    })
})

app.get("/admin_dogs", (req, res)=>{    
    Dog.find({
        
    }, (err, doc)=>{
        if(err){
            res.send(err)
        }
        else{                                 
            res.render("admin_dogs.hbs", {
                db: doc
            })
        }
    })
})

app.get("/admin_add_dog", (req, res)=>{
    res.render("admin_add_dog.hbs", {
        username: req.session.username
    })
})


app.get("/edit", (req, res)=>{                // just find the user given the id
    console.log("GET /admin_edit_dog/" + req.query.id)
    
    Dog.findOne({
        _id: req.query.id                     // just get the query, not body
    }, (err, doc)=>{
        if(err){
            res.send(err)
        }
        else{                                 // send all details of the user to edit.hbs
            res.render("admin_edit_dog.hbs", {
                dog: doc
            })
        }
    })
})

app.get("/admin_requests", (req, res)=>{
    Request.find({
        
    }, (err, doc)=>{
        if(err){
            res.send(err)
        }
        else{  
            
            res.render("admin_requests.hbs", {
                requests: doc
       })
    }
    })
})

app.get("/admin_userTable", (req, res)=>{
    
    User.find({
        
    }, (err, doc)=>{
        if(err){
            res.send(err)
        }
        else{                                 
            res.render("admin_userTable.hbs", {
                users: doc
        })
    }  
})
})

app.get("/admin_dogTable", (req, res)=>{
    
    Dog.find({
        
    }, (err, doc)=>{
        if(err){
            res.send(err)
        }
        else{                                 
            res.render("admin_dogTable.hbs", {
                dogs: doc
       })
    }  
})
})

app.get("/admin_feedbackTable", (req, res)=>{
    
    Feedback.find({
        
    }, (err, doc)=>{
        if(err){
            res.send(err)
        }
        else{                                 
            res.render("admin_feedbackTable.hbs", {
                feedbacks: doc
       })
    }  
})
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
                res.redirect("/login?error=" + encodeURIComponent('Incorrect_Credential'));
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
    
    User.update({                              // where clause
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
            res.redirect("/home")
        }
    })
    
})

app.post("/request", urlencoder, (req, res)=>{
    var reqName = req.body.reqfirst + " " + req.body.reqmiddle + " " + req.body.reqlast
    var reqEmail = req.body.reqemail
    var reqDog = req.body.reqdog
    var reqDogPic = req.body.reqdogpic
    var reqStatus = "pending"
         
    // console.log(req.body.reqdogpic.filename)
    let request = new Request({
         reqName, reqEmail, reqDog, reqDogPic, reqStatus
    })

    request.save().then((doc)=>{
        console.log(doc)                                            // print the user details if successfully saved
        res.redirect("/requests")
    },(err)=>{
        res.send(err)
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
        res.redirect("/")
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

app.listen(3000, function(){                  // read from this port
    console.log("Now listening at port 3000!");
})