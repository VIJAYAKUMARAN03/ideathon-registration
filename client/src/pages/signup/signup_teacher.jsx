import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button,Form} from "react-bootstrap";
import './signup.css';
import { Link,useNavigate } from "react-router-dom";
import Head from "../../components/header/header_sign";
const dotenv = require('dotenv')

dotenv.config(
    {
        path : '../../.env'
    }
)

function SignupTeacher(){

    const [name,setName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [prog,setProg] = React.useState('');
    const [dpt,setDpt] = React.useState('');
    const [pass,setPass] = React.useState('');
    const [cpass,setCpass] = React.useState('');
    const  [msg,setMsg] = React.useState('');

    const navigate = useNavigate();

    function handlesubmit(e)
    {
        e.preventDefault();
        if(name && email && prog && dpt && pass && cpass)
        {
            console.log(name + " " +  email  + " " +  prog  + " " +  dpt  + " "  +  pass  + " " +  cpass);
            const data = {
                    email : email,
                    name : name,
                    dpt : dpt,
                    programme : prog,
                    password : pass
                    }
                    
            fetch(`${process.env.url}ideathon/Admin/signup`,
            {
                method : "POST",
                headers : {
                    'content-type' : 'application/json; charset=UTF-8'
                },
                body : JSON.stringify(data)
            }).then(res => res.json())
            .then(res => {
                if(res.msg)
                {
                    setMsg(res.msg);
                }
                else
                {
                    console.log(res.body);
                    setMsg("");
                    navigate('/login_teacher');
                }
            })
        }
    }


    return (
        <>
            <Head/>
            <div id="d">
                <h1>Faculty Registration</h1>
                <Form onSubmit={handlesubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control className="inp" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="inp" type="email" placeholder="name@kongu.edu" onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Choose your Programme</Form.Label>
                        <Form.Select className="inp" onChange={(e) => setProg(e.target.value)}>
                            <option>Programme</option>
                            <option value="B.E">B. E</option>
                            <option value="B.Tech">B. Tech</option>
                            <option value="B.Sc">B. Sc</option>
                            <option value="M.Sc">M. Sc</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Choose your Department</Form.Label>
                        <Form.Select className="inp" onChange={(e) => setDpt(e.target.value)}>
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
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="inp" type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control className="inp" type="password" placeholder="Confirm Password" onChange={(e) => setCpass(e.target.value)}/>
                    </Form.Group>
                    <Button id="b" type="submit">
                        Sign Up
                    </Button>
                    {
                        msg &&
                        <p>{msg}</p>
                    }
                    <p>
                        Already have an account<br/>
                        <Link to='/login_teacher'>
                            <Button id="b1">Sign in</Button>
                        </Link>
                    </p>
                </Form>
            </div>
        </>
    )
}
export default SignupTeacher;