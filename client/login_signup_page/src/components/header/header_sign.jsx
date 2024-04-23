import React from "react";
import './head.css';
import tbi from './tbi.png';
import iic from './iic.png';
function Head(){
    return(
        <>
            <img id="i" src={iic} alt=""/>
            <img id="i2" src={tbi} alt=""/>
            <h1>KEC IDEATHON REGISTRATION</h1>
        </>
    )
}
export default Head;