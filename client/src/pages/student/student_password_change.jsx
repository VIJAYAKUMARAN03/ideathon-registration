import React from "react";
import NavBar from "../../components/navbar/nav_student";
import { Button,Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import './profile.css';
function StudentPasswordChange(){
    return(
        <>
            <NavBar/>
            <div id="d">
                <h1>Student Password Change</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Old Password</Form.Label>
                        <Form.Control className="inp" type="password" placeholder="Old Password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control className="inp" type="password" placeholder="New Password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Confirm New Password</Form.Label>
                        <Form.Control className="inp" type="password" placeholder="Confirm New Password" />
                    </Form.Group>
                    <Button id="b10" type="submit">
                        Change Password
                    </Button>
                    <Link to="/home_student">
                        <Button id="b13" type="submit">
                            cancel
                        </Button>
                    </Link>
                </Form>
            </div>
        </>
    )
}
export default StudentPasswordChange;