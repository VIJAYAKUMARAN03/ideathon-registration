import React from "react";
import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import './split.css';
import Head from "../../components/header/header_sign";
function Login(){
    return(
        <>
            <Head/>
            <div id="contain">
                <h1>Choose your domain to Login</h1>
                <div className="row" id="d11">
                    <div id="dc1">
                        <Card className="bg-success-subtle" id="c1">
                            <Card.Body>
                                <Card.Title>Student Login</Card.Title>
                                <Card.Text>If you're a student, please login here.</Card.Text>
                                <Link to='/login_student'>
                                    <Button className="btn btn-success">Student's Login</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div id="dc2">
                        <Card className="bg-warning-subtle" id="c1">
                            <Card.Body>
                                <Card.Title>Teacher Login</Card.Title>
                                <Card.Text>If you're a teacher, please login here.</Card.Text>
                                <Link to='/login_teacher'>
                                    <Button className="btn btn-warning text-white">Teacher's Login</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;