const express = require("express")
const router = express.Router()
const{admin, fetchQuestion, displayQuestions, deleteQestion, editQuestion} = require("../controllers/user.controllers")

router.post("/admin", admin)
router.get("/fetchquestions", fetchQuestion)
router.get("/displayQuestions", displayQuestions)
router.post("/deleteQestion", deleteQestion)
router.post("/editQuestion", editQuestion)
module.exports = router
