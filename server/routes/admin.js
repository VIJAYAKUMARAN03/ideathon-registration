var express = require("express")
const admin_controller = require('../controller/admin_controller')
const faculty_controller = require('../controller/faculty_controller')
const idea_controller = require('../controller/idea_controller')
const student_controller = require('../controller/student_controller')

var router = express.Router();

router.delete('/idea/delete',admin_controller.deleteIdea);

router.put('/idea/update',admin_controller.updateIdea);

router.put('/enddate',admin_controller.endDate);

router.put('/idea/filter',admin_controller.filterIdeas);



router.put('/student/update',student_controller.updateStudent);

router.delete('/student/delete',student_controller.deleteStudent);


router.put('/faculty/update',faculty_controller.updateFaculty);

router.delete('/faculty/delete',faculty_controller.deleteFaculty);

module.exports = router;