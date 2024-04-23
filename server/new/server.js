const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const doenv = require('dotenv')
const {Design} = require('./schema')


doenv.config(
    {
        path : './.env'
    } 
)

console.log(process.env.db)
const app = express();

app.use(cors())
app.use(express.json())
app.use(cookieParsar())

const port = process.env.port;

app.listen(port,()=>{console.log("Listening at the port "+port)})

mongoose.connect(process.env.db)
.then(()=>{console.log("db connected")})
.catch((err)=>{console.log(err)})

const upload_img = async(req,res) => {
    // console.log(req)
    console.log(req.body)
    const new_path = FIX_path + req.body.filepath
    console.log(new_path)
    const Uploaded_files = []
    console.log(fs.existsSync(new_path))
    const fsP = require('fs').promises
    const files = await fsP.readdir(new_path)
    const images = []
    for (const f of files)
    {
    const data = []
    const FILE_PATH = new_path + '/' + f
    data.push(await fsP.readFile(FILE_PATH,{encoding: 'base64'}))
    let mimeType = path.extname(FILE_PATH)
    switch (mimeType) 
    {
        case '.png': contentType = 'image/png'; break;
        case '.jpg': contentType = 'image/jpg'; break;
        case '.jpeg': contentType = 'image/jpeg'; break;
    }
    data.push(contentType)
    images.push(data)
  }

    console.log(images)
    // res.send({images : images})
    res.send(images)
}


const upload = multer({storage:storage})


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


app.post('/uploadIMG',upload.single('IMAGES'),upload_img);
