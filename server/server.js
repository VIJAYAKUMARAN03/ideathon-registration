const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const doenv = require('dotenv')
const studentRoutes = require('./routes/student')
const facultyRoutes = require('./routes/faculty')
const cookieParsar = require('cookie-parser')
const ideaRoutes = require('./routes/idea')
const adminRoutes = require('./routes/admin')


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

app.use(express.static('./uploads'));

const port = process.env.port;

app.listen(port,()=>{console.log("Listening at the port "+port)})

const db = 'mongodb://' + process.env.MONGO_USERNAME + ':' + process.env.MONGO_PASSWORD + '@' + process.env.DB_URL +'/'
console.log(db)

mongoose.connect(db)
.then(()=>{console.log("db connected")})
.catch((err)=>{console.log(err)})

app.use('/ideathon/Student',studentRoutes);
app.use('/ideathon/Faculty',facultyRoutes);
app.use('/ideathon/idea',ideaRoutes);
app.use('/ideathon/admin',adminRoutes);



