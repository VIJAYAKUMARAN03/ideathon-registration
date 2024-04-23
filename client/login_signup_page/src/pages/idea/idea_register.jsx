import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button,Form} from "react-bootstrap";
import './idea.css';
import { useNavigate } from "react-router-dom";
import Head from "../../components/header/header_sign";
import { useState ,useEffect,useRef} from "react";
function IdeaRegister(){

    const [team,setTeam] = useState('');
    const [des,setDes] = useState('');
    const [title,setTitle] = useState('');
    const [mentor,setMentor] = useState('');
    // const [members,setMembers] = useState([]);

    const [stud1,setStud1] = useState('');
    const [stud2,setStud2] = useState('');
    const [stud3,setStud3] = useState('');
    const [stud4,setStud4] = useState('');
    const [stud5,setStud5] = useState('');

    const [ind,setInd] = useState(0);
    const [msg,setMsg] = useState('');
    const [rno,setRno] =useState('');

    const R1 = useRef('');
    const R2 = useRef('');
    const R3 = useRef('');
    const R4 = useRef('');
    const R5 = useRef('');

    const navigate = useNavigate();


    function studGet()
    {
        if(rno)
        {
        fetch(`http://localhost:5432/ideathon/Student/${rno}`)
        .then(res => res.text())
        .then(res => {
            if(ind===0)
            setStud1(res)
            else if(ind===1)
            setStud2(res)
            else if(ind===2)
            setStud3(res)
            else if(ind===3)
            setStud4(res)
            else if(ind===4)
            setStud5(res)

        })
        }
        else
        {
            if(ind===0)
            setStud1("")
            else if(ind===1)
            setStud2("")
            else if(ind===2)
            setStud3("")
            else if(ind===3)
            setStud4("")
            else if(ind===4)
            setStud5("")

        } 

    }

    useEffect(studGet,[rno])


    function handdleSubmit(e)
    {
        e.preventDefault();
        
        const mem = [R1.current.value,R2.current.value,R3.current.value,R4.current.value,R5.current.value].filter(e => e!=="");
        console.log(mem)
        if(team && des && title && mentor && R1)
        {
            
            const data = {
                    title: title,
                    teamName : team,
                    description: des,
                    mentorid : mentor,
                    students: mem
                    };
            fetch(`http://localhost:5432/ideathon/Idea/registeridea`,
            {
                method :"POST",
                headers : {
                    'content-type' : 'application/json; charset=UTF-8'
                },
                body : JSON.stringify(data)
            }).then(res => res.json())
            .then(res => {
                if(res.msg)
                {
                    setMsg(res.msg);
                    console.log(msg);
                }
                else
                {
                    console.log(res)
                    navigate('/');
                }
            })
        
        }
    }

    return(
        <>
            <Head />
            <div id="ird">
                <h1>Idea Registration</h1>
                <Form onSubmit={handdleSubmit}> 
                    <Form.Group className="mb-3" >
                       <Form.Label>Team Name</Form.Label>
                        <Form.Control className="i1" type="text" placeholder="Team Name" onChange={(e) => setTeam(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control className="i1" type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control className="i3" as="textarea" rows={4} cols={50} placeholder="Description of Your Idea" onChange={(e) => setDes(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Mentor</Form.Label>
                        <Form.Control className="i1" type="text" placeholder="Mentor" onChange={(e) => setMentor(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Team Lead</Form.Label>
                        <div className="d-flex">
                            <Form.Control className="i2 me-2" type="text" placeholder="Roll Number" ref={R1} onChange={(e) => {setRno(e.target.value);setInd(0);}}/>

                            {
                                stud1 === "NOT FOUND" || stud1 ==="" ?
                                  <></> : <Button id="ab" type="submit">
                                  ✓
                              </Button>
                            }
                            
                        </div>
                        {
                            stud1 &&
                            stud1
                        }
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Team Member 2 (Optional)</Form.Label>
                        <div className="d-flex">
                            <Form.Control className="i2 me-2" type="text" placeholder="Roll Number" ref={R2} onChange={(e) => {setRno(e.target.value);setInd(1);}}/>
                            {
                                stud2 === "NOT FOUND" || stud2 ==="" ?
                                <></> : <Button id="ab" type="submit">
                                ✓
                            </Button>
                            }
                        </div>
                        {
                            stud2 &&
                            stud2
                        }
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Team Member 3 (Optional)</Form.Label>
                        <div className="d-flex">
                            <Form.Control className="i2 me-2" type="text" placeholder="Roll Number" ref={R3} onChange={(e) => {setRno(e.target.value);setInd(2);}}/>
                            {
                                stud3 === "NOT FOUND" || stud3 ==="" ?
                                <></> : <Button id="ab" type="submit">
                                  ✓
                              </Button>
                            }
                        </div>
                        {
                            stud3 &&
                            stud3
                        }
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Team Member 4 (Optional)</Form.Label>
                        <div className="d-flex">
                            <Form.Control className="i2 me-2" type="text" placeholder="Roll Number" ref={R4} onChange={(e) => {setRno(e.target.value);setInd(3);}}/>
                            {
                                stud4 === "NOT FOUND" || stud4 ==="" ?
                                <></> : <Button id="ab" type="submit">
                                  ✓
                              </Button>
                            }

                        </div>
                        {
                            stud4 &&
                            stud4
                        }
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Team Member 5 (Optional)</Form.Label>
                        <div className="d-flex">
                            <Form.Control className="i2 me-2" type="text" placeholder="Roll Number" ref={R5} onChange={(e) => {setRno(e.target.value);setInd(4);}}/>
                            {
                                stud5 === "NOT FOUND" || stud5 ==="" ?
                                <></> : <Button id="ab" type="submit">
                                  ✓
                              </Button>
                            }
                        </div> 
                        {
                            stud5 &&
                            stud5
                        }
                    </Form.Group>
                    <Button id="irsb" type="submit">
                        Submit Idea
                    </Button>
                </Form>
            </div>
        </>
    )
}
export default IdeaRegister;