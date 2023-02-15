const Express = require('express')
const BodyParser = require('body-parser')
const Cors = require('cors')
const Mongoose = require('mongoose')
const Jwt = require('jsonwebtoken')
const Bcrypt = require('bcrypt')
const empModel = require("./models/emps")

Mongoose.connect("mongodb+srv://sarath:sarath123@cluster0.giuxtco.mongodb.net/EmpMERN?retryWrites=true&w=majority", { useNewUrlParser: true });


let app = new Express()

app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json())
app.use(Cors())
Mongoose.set("strictQuery", false)

app.post("/signin", async (req, res) => {
    var eid = req.body.eid
    var password = req.body.password
    let check = empModel.find({ eid: eid }, (err, data) => {
        if (data.length > 0) {
            const pwvalid = Bcrypt.compareSync(password, data[0].password)
            if (pwvalid) {
                // return res.json({"status":"success","data":data})
                Jwt.sign({ eid: eid, id: data[0]._id }, "etoken", { expiresIn: "1d" },
                    (err, token) => {
                        if (err) {
                            res.json({ "status": "error", "error": err })
                        } else {
                            res.json({ "status": "success", "data": data, "token": token })
                        }
                    })
            }
            else {
                return res.json({ "status": "failed", "data": "invalid password" })
            }
        }
        else {
            res.json({ "status": "failed", "data": "invalid email id" })
        }
    })
})

app.post("/signup", async (req, res) => {
    let data = new empModel({
        eid: req.body.eid,
        password: Bcrypt.hashSync(req.body.password, 10),
        name: req.body.name,
        position: req.body.position,
        salary: req.body.salary
    })
    console.log(data)
    await data.save()
    res.json({ "status": "success", "data": data })
})


app.post("/crud", (req, res) => {
    Jwt.verify(req.body.token,"etoken",(err,decoded)=>{
        if(decoded && decoded.eid){
            res.json({ "status": "Authorised user"})
        }
        else{
            res.json({ "status": "Unauthorised user"})
        }
    })
})





app.listen(3001, () => {
    console.log("Server now at 3001")
})