import React from "react";
import NavBar from "../../components/navbar/nav_student";
import { Button,Form} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './profile.css';
function ProfileStudent(){

    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state;
    console.log(state);

    return(
        <>
            <NavBar/>
            <div id="d">
                <h1>Student Profile</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control className="inp" type="text" placeholder={state.name} disabled/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Register Number</Form.Label>
                        <Form.Control className="inp" type="text" placeholder={state.rno} disabled/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="inp" type="email" placeholder={state.email} disabled/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Choose your Programme</Form.Label>
                        <Form.Select className="inp"  disabled>
                            <option>{state.programme}</option>
                            <option value="B.E">B. E</option>
                            <option value="B. Tech">B. Tech</option>
                            <option value="B. Sc">B. Sc</option>
                            <option value="M. Sc">M. Sc</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Choose your Department</Form.Label>
                        <Form.Select className="inp" disabled>
                            <option>{state.dpt}</option>
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
                        <Form.Select className="inp" disabled>
                            <option>{state.section}</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Year</Form.Label>
                        <Form.Select className="inp" disabled>
                            <option>{state.year}</option>
                            <option value={1}>I</option>
                            <option value={2}>II</option>
                            <option value={3}>III</option>
                            <option value={4}>IV</option>
                            <option value={5}>V</option>
                        </Form.Select>
                    </Form.Group>
                        <Button id="b9" type="submit" onClick={() => {navigate('/profile_student_update',{state:state})}}>
                            Edit
                        </Button>
                </Form>
            </div>
        </>
    )
}
export default ProfileStudent;