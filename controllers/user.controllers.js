const { status } = require("express/lib/response");
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
const displayQuestions = (req,res)=>{
    userModel.find()
    .then((result)=>{console.log(result); res.send({status:true, result, message:"Questions loaded successfully" })})
    .catch((err)=>{console.log("couldnt load questions" + err); res.send({status:false, maessage:"could not load questions"})})
}
const deleteQestion = (req,res)=>{
    let userID = req.body._id; console.log(req.body);
    userModel.findOneAndDelete({_id:userID})
    .then((result)=>{console.log(result); res.send({status:true, message:"Deleted successfully", result})})
    .catch((err)=>{console.log(err+ "couldnt delete"); res.send({status:false, message:"could not Delete", result})})
}
const editQuestion = (req,res)=>{ console.log(req.body);
let question = req.body.eQuestion; let optionA = req.body.eOptionA; let optionB= req.body.eOptionB;
let optionC = req.body.eOptionC; let optionD = req.body.eOptionD; let correctAnswer= req.body.eCorrectAnswer 
userModel.findOneAndUpdate({_id:req.body.editID}, {question, optionA, optionB, optionC, optionD, correctAnswer})
.then ((result)=> {res.send({status:true, message: "Edited successfully", result}); console.log("edited succesfully");})
.catch((err)=>{res.send({status:false, message:" Edit failed" + " " + err}); console.log(err, "couldnt edit");})
}
module.exports={admin, fetchQuestion, displayQuestions, deleteQestion, editQuestion}