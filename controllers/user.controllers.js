const userModel = require("../models/user.model")
let jwt = require("jsonwebtoken");
let nodemailer = require("nodemailer");

const admin = (req,res)=>{
    let userData = {
        question:req.body.question,
        optionA: req.body.optionA,
        optionB: req.body.optionB,
        optionC: req.body.optionC,
        optionD: req.body.optionD,
        correctAnswer: req.body.correctAnswer
    }
    let question_Options_Answer = new userModel(userData)
    question_Options_Answer.save()
    .then(()=>{console.log("question saved successfully");res.send({status:true, message:"question saved successfully"})})
    .catch((err)=>{console.log("failed", err); res.send({status:false, message:"question could not be saved"})})
}

const fetchQuestion = (req,res)=>{
    userModel.find()
    .then((result)=>{console.log("questions loaded successfully"); res.send({status:true, message:"Questions loaded successfully", result })})
    .catch((err)=>{console.log("could not load questions", err); res.send({status:false, message:"could not load questions"})})
}

module.exports={admin, fetchQuestion}