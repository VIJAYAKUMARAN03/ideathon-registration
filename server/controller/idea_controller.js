const  {Idea} = require('../schemas/ideaSchema')
const  {Student} = require('../schemas/studentSchema')
const  {Faculty} = require('../schemas/facultySchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const {promisify} = require('util')
const { Admin } = require('../schemas/adminSchema')
const fs = require('fs')
const util = require('util');


const path = require('path')
dotenv.config(
    {
        path : '../.env'
    }
)

const info_team = new Idea({teamid:'123456789', data : {AD : 1, CS : 1, AL : 1, MR :1} ,title:'NO VALUE' ,description :'NO VALUE',teamName:'NO VALUE',mentorid:'NO VALUE'})
info_team.save()
module.exports.createIdea = async(req,res) => {
        
        console.log(req.body)

        const body = req.body
        let s = body.students[0].slice(2,4)
        let no;

        const team_id_info = await Idea.findOne({teamid:process.env.team_id_info});
        const data = team_id_info.data;

        if(data[s]<10)
        {
            no = "00" + data[s]
        }
        else if(data[s]<100)
        {
            no = "0" + data[s]
        }
        else
        {
            no = data[s]
        }
        body['teamid'] =  "T" + s + no;
        //console.log("TEAM ID : " + body.teamid);
        data[s] += 1;
        // console.log(data);

        await Idea.findOneAndUpdate({teamid:process.env.team_id_info},{$set:{data:data}})

        const newidea = new Idea(req.body); 

        const list = body.students;
        const st_id = [];
        for(let i=0;i<list.length;i++)
        {
            console.log(list[i]);
            const student = await Student.findOneAndUpdate({rno:list[i]},{$push:{ideas:newidea._id}});
            if(student)
            {
                st_id.push(student._id);
                const st_ideas = student.ideas;
                st_ideas.push(newidea._id);
            }
            
        }
        newidea.students = st_id;
        await Faculty.findOneAndUpdate({mentorid:body.mentorid},{$push:{ideas:newidea._id}});
        console.log(newidea);
        newidea.save();
        res.send(newidea);
}

module.exports.getIdea = async(req,res) => {
    console.log(req.body)
    const idea = await Idea.findOne({teamid : req.body.teamid});
    if(idea)
    {
        delete idea._id;
        res.send(idea);
    }
    else
    res.send({msg:"No Idea Found"})
}

module.exports.get_idea_students = async(req,res) => {
    console.log(req.params);
    const idea = await Idea.findOne({teamid : req.params.teamid});
    console.log(idea);
    const students = [];
    for(let i=0;i < (idea.students).length; i++)
    {
        let student = await Student.findById((idea.students)[i]);
        if(student)
        {
            student = student.toJSON();
            delete student['password'];
            delete student.ideas;
            delete student._id;
            console.log(student);
            students.push(student);
        }
    }
    res.send(students);
}

module.exports.get_idea_faculty = async(req,res) => {
    console.log(req.body);
    const idea = await Idea.findOne(req.body);
    console.log(idea);
        let faculty = await Faculty.findById((idea.mentorid));
        if(faculty)
        {
            faculty = faculty.toJSON();
            delete faculty['password'];
            delete faculty.ideas;
            delete faculty._id;
            console.log(faculty);
        }
    res.send(faculty);
}



module.exports.upload_pdf = async(req,res) => {
        const idea = await Idea.findOne({teamid : req.body.teamid});
        if( idea && req.file)
        {
                await Idea.findOneAndUpdate({teamid : req.body.teamid},{$push:{abstract:req.file.filename}})
                res.send({msg : "PDF SuccessFully updated"})
        }
        else
        {
            res.send({msg : "Idea not found"})
        }
        console.log(req.file)
}

module.exports.upload_pic = async(req,res) => {
    const idea = await Idea.findOne({teamid : req.body.teamid});
    if( idea && req.file)
    {
            await Idea.findOneAndUpdate({teamid : req.body.teamid},{$push:{pic:req.file.filename}})
            res.send({msg : "PIC SuccessFully updated"})
    }
    else
    {
        res.send({msg : "Idea not found"})
    }
    console.log(req.file)
}

module.exports.upload_ppt = async(req,res) => {
    const idea = await Idea.findOne({teamid : req.body.teamid});
    if( idea && req.file)
    {
            await Idea.findOneAndUpdate({teamid : req.body.teamid},{$push:{ppt:req.file.filename}})
            res.send({msg : "PPT SuccessFully updated"})
    }
    else
    {
        res.send({msg : "Idea not found"})
    }
    console.log(req.file)
}

module.exports.uploads = async(req,res) => {
    console.log(req.files)
}

let FIX_path = '../uploads/'
module.exports.getUploads = async(req,res) => {
    // console.log(req)
    console.log(req.body)
    const new_path = FIX_path + req.body.filepath
    console.log(new_path)
    const Uploaded_files = []
    console.log(fs.existsSync(new_path))

    //  fs.readdir(new_path, (err,files) => {

    //      files.forEach( async(file) =>{

    //         const datas = []
    //         let path_File = new_path + '/' + file
    //         console.log(path_File)
    //         const data = await fsPromises.readFile(path_File);
    //         console.log(data)
    //         let mimeType = path.extname(path_File)
    //         switch (mimeType) 
    //         {
    //             case '.png': contentType = 'image/png'; break;
    //             case '.jpg': contentType = 'image/jpg'; break;
    //             case '.jpeg': contentType = 'image/jpeg'; break;
    //         }
    //         datas.push(data)
    //         datas.push(contentType)            
    //         Uploaded_files.push(datas)
    //         console.log(Uploaded_files)

    //     })

    // })

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
