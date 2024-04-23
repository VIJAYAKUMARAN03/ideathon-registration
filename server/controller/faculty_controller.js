const  {Faculty} = require('../schemas/facultySchema')
const  {Idea} = require('../schemas/ideaSchema')
const  {Admin} = require('../schemas/adminSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const {promisify} = require('util')

dotenv.config(
    {
        path : '../.env'
    }
)

module.exports.signinFaculty = async(req,res) => {
    console.log(req.params)
    console.log(req.params.email)
    const faculty1 = await Faculty.findOne({email:req.params.email});
    if(faculty1)
    {
        console.log(faculty1.password)
        if(await bcrypt.compare(req.params.pass,faculty1.password))
        {
            const token = jwt.sign({id : faculty1.email },process.env.jwt_secret,
                {expiresIn : process.env.jwt_expires_in})

            const cookieOption = {
                expires : new Date(
                    Date.now() + process.env.jwt_expires_cookie * 24 * 60 * 60 * 1000
                ),
            }
            console.log(cookieOption)
            res.cookie("ideathon",token,cookieOption)
            res.send(faculty1)
        }
        else
        {
            res.send({msg:"PASSWORD IS INCORRECT"})
        }
    }
    else
    {
        res.send({msg:"DATA DOESN'T EXISTS. PLEASE SIGNUP"});
    }
}

module.exports.signupFaculty = async(req,res) => {
    console.log(req.body)
    console.log(req.body.email)
    const faculty = new Faculty(req.body)
    const faculty1 = await Faculty.findOne({email:req.body.email});
    if(faculty1)
    {
        res.send({msg:"DATA ALREADY EXISTS"});
    }
    else
    {
        await faculty.save();
        console.log(faculty);
        res.send(faculty);
    }
}

module.exports.updateFaculty = async(req,res) => {
    if(req.user)
    {
        console.log(req.body)
        const faculty1 = await Faculty.findOne({email:req.params.id})
        if(faculty1)
        {
            if(req.body.password)
            {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password,salt)
            }
            const faculty = await Faculty.findOneAndUpdate({email:req.params.id},{$set:req.body})
            const faculty2 = await Faculty.findOne({email:req.params.id})
            res.send(faculty2);
        }
        else
        {
            res.send({msg:"DATA DOESN'T EXISTS"});
        }
    }
    else
    {
        res.send({msg : "PLEASE LOGIN"});
    }
}


module.exports.deleteFaculty = async(req,res) => {
    if(req.user)
    {
        console.log(req.params.id);
        const faculty = await Faculty.findOne({email:req.params.id});

        if(faculty)
        {
            const faculty1 = await Faculty.findOneAndDelete({email:req.params.id});
            res.send("SUCESSFULLY DELETED");
        }
        else
        {
            res.send("Faculty not found");
        }
    }
    else
    {
        res.send({msg : "PLEASE LOGIN"})
    }
}

module.exports.isloggedin = async(req,res,next) =>{
    console.log(req.cookies)
    if(req.cookies.ideathon)
    {
        const decode = await promisify(jwt.verify)(req.cookies.ideathon,process.env.jwt_secret)
        console.log(decode)
        const faculty = await Faculty.findOne({email:decode.id});
        req.user = faculty;
        next();
    }
    else{
        next();
    }
}


module.exports.updateIdea = async(req,res) => {
    const date = new Date();
    const data = await Admin.findById(process.env.enddate);
    const enddate = new Date(data.enddate)
    console.log(date);
    console.log(enddate);
    console.log(date<enddate);
    if(date <= enddate)
    {
        console.log(req.body);
        const idea = await Idea.findOneAndUpdate({teamid:req.body.teamid},{$set:req.body});
        const idea1 = await Idea.findOne({teamid:req.body.teamid});
        res.send(idea1);
    }
    else
    {
        res.send({msg : "End Date reached"});
    }
}


module.exports.deleteIdea = async(req,res) => {
    console.log(req.body);
    const idea = await Idea.findOne({teamid:req.body.teamid});
    if(idea)
    {
        const date = new Date();
        const data = await Admin.findById(process.env.enddate);
        const enddate = new Date(data.enddate)
        console.log(date);
        console.log(enddate);
        console.log(date<enddate);

        if(date <= enddate)
        {
            await Idea.findOneAndDelete({teamid:req.body.teamid});
            res.send({msg :"Idea Deleted"});
        }
        else
        {
            res.send({msg : "End Date reached"});
        } 
    }
    else
    {
        res.send({msg:"Not found"});
    }
}

 
module.exports.getIdeas = async(req,res) => {
    console.log(req.body);
    const faculty = await Faculty.findOne(req.body);
    console.log(faculty);
    const ideas =[];
    if(faculty)
    {
        for(let i=0;i<(faculty.ideas).length;i++)
        {
            let idea = await Idea.findById((faculty.ideas)[i]);
            if(idea)
            {
                idea = idea.toJSON();
                delete idea._id;
                console.log(idea);
                ideas.push(idea);
            }
        }
    }
    console.log(ideas);
    res.send(ideas);
}

