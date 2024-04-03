const mongoose = require("mongoose") //connecting to mongodb
const bcryptjs = require("bcryptjs"); const bcrypt = require("bcryptjs/dist/bcrypt");

let adminSchema = mongoose.Schema({
    //question, optionA, optionB, optionC, optionD, correctAnswer
    question:{type: String, required:true},
    optionA:{type: String, required:true},
    optionB:{type: String, required:true},
    optionC:{type: String, required:true},
    optionD:{type: String, required:true},
    correctAnswer:{type: String, required:true}

})

let CbtModel = mongoose.model("GeneralScience", adminSchema)
module.exports = CbtModel