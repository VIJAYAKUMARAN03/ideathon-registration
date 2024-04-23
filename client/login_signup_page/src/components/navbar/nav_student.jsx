import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import tbi from '../header/tbi.png';
import iic from '../header/iic.png';
import pro from './pro.png';
import './nav.css';
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function NavBar(props){

    const navigate = useNavigate();

    function stdProfile()
    {
        const state = props.state;
        navigate('/profile_student',{state : state});
    }
    return(
        <Navbar bg="success-subtle" expand="lg">
            <Container fluid>
                <Navbar.Brand>
                    <img src={iic} id="ni1" alt="#" />
                </Navbar.Brand>
                <Navbar.Brand>KEC Ideathon</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="/home_student">Home</Nav.Link>
                        <Nav.Link>About</Nav.Link>
                        <NavDropdown title="Schedule" className="bg-success-subtle">
                            <NavDropdown.Item>Review Schedule</NavDropdown.Item>
                            <NavDropdown.Item>
                                Idea Submissions
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/idea_register">
                                Idea Registration
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>
                            Previous Ideathon
                        </Nav.Link>
                        <Nav.Link>
                            Project TRL levels
                        </Nav.Link>
                        <Nav.Link>
                            PPT Template
                        </Nav.Link>
                    </Nav>
                    <NavDropdown title={<img src={pro} id="ni3" alt="Dropdown" />}>
                            <NavDropdown.Item onClick={stdProfile}>Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/student_password_change">
                                Change Password
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/">
                                Log Out
                            </NavDropdown.Item>
                    </NavDropdown>
                    <Navbar.Brand className="d-flex">
                        <img src={tbi} id="ni2" alt="#" />
                    </Navbar.Brand>
                </Navbar.Collapse>
            </Container>
        </Navbar>   
    )
}
export default NavBar;