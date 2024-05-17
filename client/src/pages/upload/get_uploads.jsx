import { useState,useEffect } from "react";
import axios from 'axios';
function Get_Uploads()
{
    const [teamid,setteamid] = useState('');
    const [img,setimg] = useState([])
    function get(e,s)
    {
            e.preventDefault()
            const path = teamid + '/' + s
            console.log(path)
            const data = {
                filepath : path
            }
            axios.post('http://localhost:5432/ideathon/idea/get_uploads',data)
            .then(res => {return res.data})
            .then(res => {
                console.log(res)
                let imgs = res.map((e) => 
                    <img src={`data:${e[1]};base64,${e[0]}`} alt=""/> )
                setimg(imgs)
                    
            })
    }
    return(
        <>
        <input type="text" onChange={e => setteamid(e.target.value)}/> <br />   
        <input type="button" value="GET PICS" onClick={e => get(e,'IMAGES')}/>
        <input type="button" value="GET PICS" onClick={e => get(e,'PPT')}/>
        <input type="button" value="GET PICS" onClick={e => get(e,'VIDEOS')}/>
        <input type="button" value="GET PICS" onClick={e => get(e,'PDF')}/>
        <br />
        <br />
        {img}
        </>
    )
}

export default Get_Uploads;