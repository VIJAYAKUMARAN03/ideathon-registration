const  {Faculty} = require('../schemas/facultySchema')
const  {Schedule} = require('../schemas/scheduleSchema')
const  {Admin} = require('../schemas/adminSchema')
const  {Idea} = require('../schemas/ideaSchema')
const  {Student} = require('../schemas/studentSchema')
const dotenv = require('dotenv')

dotenv.config(
    {
        path : '../.env'
    }
)

module.exports.updateIdea = async(req,res) => {
    console.log(req.body);
    const idea = await Idea.findOneAndUpdate({teamid:req.body.teamid},{$set:req.body});
    const idea1 = await Idea.findOne({teamid:req.body.teamid});
    res.send(idea1); 
}

module.exports.endDate = async(req,res) => {
    console.log(req.body);
    await Admin.findByIdAndUpdate(process.env.endDate,{$set:req.body});
    const enddate = await Admin.findById(process.env.endDate);
    res.send(enddate);
} 

module.exports.deleteIdea = async(req,res) => {
    console.log(req.body);
    const idea = await Idea.findOneAndDelete({teamid:req.body.teamid});
    if(idea)
    {
        res.send({msg :"Idea Deleted"}); 
    }
    else
    {
        res.send({msg:"Not found"});
    }
}

module.exports.filterIdeas = async(req,res) => {
    console.log(req.body);
    const ideas1 =[];
    let ideas = await Idea.find(req.body);
    for(let i=0;i<ideas.length;i++)
        {
            let idea = ideas[i];
            if(idea)
            {
                idea = idea.toJSON();
                delete idea._id;
                console.log(idea);
                ideas1.push(idea);
            }
        }
    console.log(ideas1);
    res.send(ideas1);
}
