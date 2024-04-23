var express = require("express")
const faculty_controller = require('../controller/faculty_controller')
var router = express.Router();

router.get('/signin/:email/:pass',faculty_controller.signinFaculty)

router.post('/signup',faculty_controller.signupFaculty)

router.put('/update/:id',faculty_controller.isloggedin,faculty_controller.updateFaculty)

router.delete('/delete/:id',faculty_controller.isloggedin,faculty_controller.deleteFaculty)

router.put('/idea/update',faculty_controller.updateIdea);

router.delete('/idea/delete',faculty_controller.deleteIdea);

router.post('/ideas',faculty_controller.getIdeas);

module.exports =  router;