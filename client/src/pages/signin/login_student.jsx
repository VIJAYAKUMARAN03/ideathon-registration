import React from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Button,Form} from "react-bootstrap";
import './signin.css';
import Head from "../../components/header/header_sign";

const dotenv = require('dotenv')

dotenv.config(
    {
        path : '../../.env'
    }
)


function LoginStudent(){
    const [user,setUser] = React.useState("");
    const [pass,setPass] = React.useState("");
    const [msg,setMsg] = React.useState("");
    const navigate = useNavigate();

function handleSubmit(e)
    {
        e.preventDefault();
        if(user && pass)
        {
        fetch(`${process.env.url}ideathon/Student/signin/${user}/${pass}`)
        .then(res => { return res.json() })
        .then(res => {
            if(res.msg)
            {
                setMsg(res.msg);
            }
            else
            {
                setMsg("");
                navigate('/home_student',{state : res})
            }
        })
        }
        
    }


    return (
        <>
                <Head/>
                <div id="d1">
                <h1>Student Login</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control className="inp1" type="email" placeholder="Enter your email id" value={user} onChange={(e)=>setUser(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label >Password</Form.Label>
                        <Form.Control className="inp1" type="password" placeholder="Password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                    </Form.Group>
                    <Button id="b11" type="submit">
                        Login
                    </Button>
                    <p>
                        Doesn't have an account <br/>
                        <Link to='/signup_student'>
                            <Button id="b12">Sign up</Button>
                        </Link>
                    </p>
            
                </Form>
                {
                        msg &&
                        <p>{msg}</p>
                    }
            </div>
           
        </>
        

    )
}
export default LoginStudent;