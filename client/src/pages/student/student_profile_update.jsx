import React from "react";
import NavBar from "../../components/navbar/nav_student";
import { Button,Form} from "react-bootstrap";
import { useLocation,useNavigate } from "react-router-dom";
import './profile.css';

const dotenv = require('dotenv')

dotenv.config(
    {
        path : '../../.env'
    }
)


function UpdateProfileStudent(){

    const navigate = useNavigate();
    const location =useLocation();
    const state = location.state;
    console.log(state);
    const [name,setName] = React.useState(state.name);
    const [rno,setRno] = React.useState(state.rno);
    const [email,setEmail] = React.useState(state.email);
    const [prog,setProg] = React.useState(state.programme);
    const [dpt,setDpt] = React.useState(state.dpt);
    const [sec,setSec] = React.useState(state.section);
    const [year,setYear] = React.useState(state.year);

    console.log(prog +"  " + dpt)    
    function updatestd(e)
    {
        e.preventDefault();
        const newstate = {
            name : name,
            rno : rno,
            dpt : dpt,
            programme : prog,
            email : email,
            section : sec,
            year : year
        }
        fetch(`${process.env.url}ideathon/Student/update/${email}`,
        {
            method : "PUT",
            headers : {
                'content-type' : 'application/json; charset=UTF-8'
            },
            body : JSON.stringify(newstate)
        }).then(res => res.json())
        .then(res => {
            if(res.msg)
            {
                console.log(res);
            }
            else
            {
                console.log(res.body)
                navigate('/profile_student',{state:newstate})
            }
        })
        }

    return(
        <>
            <NavBar/>
            <div id="d">
                <h1>Student Profile Update</h1>
                <Form>                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control className="inp" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Register Number</Form.Label>
                        <Form.Control className="inp" type="text" placeholder="Register Number" value={rno} onChange={(e) => setRno(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="inp" type="email" placeholder="name@kongu.edu" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Choose your Programme</Form.Label>
                        <Form.Select className="inp" value={prog} onChange={(e) => setProg(e.target.value)}>
                            <option>Programme</option>
                            <option value="B.E">B. E</option>
                            <option value="B. Tech">B. Tech</option>
                            <option value="B. Sc">B. Sc</option>
                            <option value="M. Sc">M. Sc</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Choose your Department</Form.Label>
                        <Form.Select className="inp" value={dpt} onChange={(e) => setDpt(e.target.value)}>
                            <option>Department</option>
                            <option value="Artificial Intelligence and Data Science">Artificial Intelligence and Data Science</option>
                            <option value="Artificial Intelligence and Machine Learning">Artificial Intelligence and Machine Learning</option>
                            <option value="Computer Science Engineering">Computer Science Engineering</option>
                            <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                            <option value="Electronics and Electrical Engineering">Electronics and Electrical Engineering</option>
                            <option value="Electronics and Instrumentation Engineering">Electronics and Instrumentation Engineering</option>
                            <option value="Computer Science and Design Engineering">Computer Science and Design Engineering</option>
                            <option value="Information Technology">Information Technology</option>
                            <option value="Civil Engineering">Civil Engineering</option>
                            <option value="Mechnical Engineering">Mechnical Engineering</option>
                            <option value="Mechtranics Engineering">Mechtranics Engineering</option>
                            <option value="Automobile Engineering">Automobile Engineering</option>
                            <option value="Software Systems">Software Systems</option>
                            <option value="Computer Science and Design">Computer Science and Design</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Choose your Section</Form.Label>
                        <Form.Select className="inp" value={sec} onChange={(e) => setSec(e.target.value)}>
                            <option>Section</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Choose your Year</Form.Label>
                        <Form.Select className="inp" value={year} onChange={(e) => setYear(e.target.value)}>
                            <option>Year</option>
                            <option value={1}>I</option>
                            <option value={2}>II</option>
                            <option value={3}>III</option>
                            <option value={4}>IV</option>
                            <option value={5}>V</option>
                        </Form.Select>
                    </Form.Group>
                    <Button id="b7" type="submit" onClick={updatestd}>
                        Update
                    </Button>
                        <Button id="b8" type="submit" onClick={() => {navigate('/profile_student',{state:state})}}>
                            cancel
                        </Button>
                </Form>
            </div>
        </>
    )
}
export default UpdateProfileStudent;