const Mongoose = require('mongoose')

// let EmpSchema=Mongoose.Schema

const empSchema=Mongoose.Schema(
    {
    eid:String,
    password:String,
    name:String,
    position:String,
    salary: Number
    }
)

var empModel=Mongoose.model("emps",empSchema)

module.exports=empModel