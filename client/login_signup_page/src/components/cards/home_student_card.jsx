import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './card.css';
function HomeStudentCard(){
    return(
        <div id="card_div">
            <div id="card_1" className="col-sm-6 mb-3 mb-sm-0">
                <Card className="bg-success-subtle">
                    <Card.Body>
                        <Card.Title>My Ideas</Card.Title>
                        <Card.Text>
                            View you submitted ideas to know your Review Schedule
                        </Card.Text>
                        <Button className="btn btn-success">Idea Submissions</Button>
                    </Card.Body>
                </Card>
            </div>
            <div id="card_2" className="col-sm-6 mb-3 mb-sm-0">
                <Card className="bg-warning-subtle">
                    <Card.Body>
                        <Card.Title>Idea Registration</Card.Title>
                        <Card.Text>
                            Register Your Idea to participate in the Ideathon
                        </Card.Text>
                        <Link to="/idea_register"><Button className="btn btn-warning text-white">Idea Registration</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
export default HomeStudentCard;