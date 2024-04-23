const express = require('express')
const idea_controller = require('../controller/idea_controller')
const router = express.Router()
const multer = require('multer');
const fs = require('fs')
const doenv = require('dotenv')

doenv.config({
    path : '../.env'
})

const storage = multer.diskStorage({
    destination : (req,file,cb) =>{ 
        console.log(req.body)
        // console.log(process.env.upload_path)
        let path = './uploads/'  + req.body.teamid;

        if(!(fs.existsSync(path)))
        fs.mkdirSync(path)

        path = path + '/' + file.fieldname

        if(!(fs.existsSync(path)))
        fs.mkdirSync(path)

        cb(null,path)
    },
    filename : (req,file,cb) => { 
        cb(null,Date.now() + "_" + file.originalname)}
})

const upload = multer({storage:storage})

router.post('/registeridea',idea_controller.createIdea);

router.get('/ideas/:teamid',idea_controller.get_idea_students);

router.get('/students',idea_controller.get_idea_students);

router.get('/faculty',idea_controller.get_idea_faculty);

router.post('/getIdea',idea_controller.getIdea);

router.post('/uploadPDF',upload.single('PDF'),idea_controller.upload_pdf);

router.post('/uploadPPT',upload.single('PPT'),idea_controller.upload_ppt);

router.post('/uploadIMG',upload.single('IMAGES'),idea_controller.upload_pic);

const upload_data = [
    {
        name : 'PDF',
        maxCount : 2
    },
    {
        name : 'PPT',
        maxCount : 2
    },
    {
        name : 'IMAGES',
        maxCount : 5
    },
    {
        name : 'VIDEOS',
        maxCount : 2
    }
]

router.post('/uploads',upload.fields(upload_data),idea_controller.uploads);

router.post('/get_uploads',idea_controller.getUploads)

module.exports = router;