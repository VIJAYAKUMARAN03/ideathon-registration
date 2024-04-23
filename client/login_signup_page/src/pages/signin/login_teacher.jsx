import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button,Form} from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import './signin.css';
import Head from "../../components/header/header_sign";
function LoginTeacher(){
    const [user,setUser] = React.useState("");
    const [pass,setPass] = React.useState("");
    const [msg,setMsg] = React.useState("");
    const navigate = useNavigate();

    function handleSubmit(e)
    {
        e.preventDefault();
        if(user && pass)
        {
        fetch(`http://localhost:5432/ideathon/Admin/signin/${user}/${pass}`)
        .then(res => { return res.json() })
        .then(res => {
            if(res.msg)
            {
                setMsg(res.msg);
            }
            else
            {
                setMsg("");
                navigate('/profile_teacher',{state : res})
            }
        })
        }
        
    }

    return (
        <>
        <Head/>
        <div id="d">
            <h1>Teacher Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="email" className="inp1" placeholder="Enter your email id" value={user} onChange={(e)=>setUser(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" className="inp1" placeholder="Password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                </Form.Group>
                <Button id="b11" type="submit">
                    Login
                </Button>
                <p>
                    Doesn't have an account <br/>
                    <Link to='/signup_teacher'>
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
export default LoginTeacher;