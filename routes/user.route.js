const express = require("express")
const router = express.Router()
const{admin, fetchQuestion} = require("../controllers/user.controllers")

router.post("/admin", admin)
router.get("/fetchquestions", fetchQuestion)

module.exports = router
