import React from "react";
import './home.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from "react-bootstrap";
function Home(){
    return(
        <>
            <div className="bgimg">
                <div id="hd">
                    <Link to="/login_split"><Button id="lb">Login</Button></Link>
                    <h1>KEC Ideathon Registration</h1>
                    <Link to="/signup_split"><Button id="sb">SignUp</Button></Link>
                </div>
                <div id="cdh">
                    <h1>KEC Ideathon</h1>
                    <p>
                        The Ideathon is conducted by TBI@KEC to identify the best business idea to be marketed. The Ideathon is conducted for each department, and the top 20 ideas (based on the department) were shortlisted for the Proof of Concept (PoC) Round. In the PoC round, the teams were given time to work on their ideas and develop a PoC for their project. The top 10 ideas will be shortlisted for the final round, which is the expo conducted by TBI@KEC with IIC. The winning ideas will be funded and developed into a product. Signin to Know more.
                    </p>
                </div>
            </div>
        </> 
    )
}
export default Home;