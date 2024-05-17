import { useState,useEffect } from "react";
import axios from 'axios';
function Uploads()
{
    const [teamid,setteamid] = useState('');
    const [fmsg,setfmsg] = useState('');

    const [PDFfile,setPDFFile] = useState('');
    const [PDFtype,setPDFType] = useState('');
    const [PDFi,setPDFi] = useState('');
    useEffect(() => {
        var allowedExtensions =/(\.pdf)$/i;
        if(!allowedExtensions.exec(PDFtype))
        setPDFi('Not Supported');
        else
        setPDFi('');
    },[PDFtype])


    const [PPTfile,setPPTFile] = useState('');
    const [PPTtype,setPPTType] = useState('');
    const [PPTi,setPPTi] = useState('');
    useEffect(() => {
        var allowedExtensions =  /(\.ppt|\.pptx)$/i ;
        if(!allowedExtensions.exec(PPTtype))
        setPPTi('Not Supported');
        else
        setPPTi('');
    },[PPTtype])

    const [PICfile,setPICFile] = useState('');
    const [PICtype,setPICType] = useState('');
    const [PICi,setPICi] = useState('');
    useEffect(() => {
        var allowedExtensions = /(\.jpeg|\.jpg|\.png)$/i;
        if(!allowedExtensions.exec(PICtype))
        setPICi('Not Supported');
        else
        setPICi('');
    },[PICtype])

    const [VIDfile,setVIDFile] = useState('');
    const [VIDtype,setVIDType] = useState('');
    const [VIDi,setVIDi] = useState('');
    useEffect(() => {
        var allowedExtensions = /(\.mp4|\.mkv)$/i;
        if(!allowedExtensions.exec(VIDtype))
        setVIDi('Not Supported');
        else
        setVIDi('');
    },[VIDtype])

    function submit(e)
    {
        e.preventDefault();
        if(PDFi === 'Not Supported')
        alert("PDF File not supported")

        else if(PPTi === 'Not Supported')
        alert("PPT File not supported")

        else if(PICi === 'Not Supported')
        alert("PIC File not supported")

        else if(VIDi === 'Not Supported')
        alert("VIDEO File not supported")
    
        else if(idea === 'No Idea Found')
        alert("No Idea Found")

        else
        {
            const f = new FormData()
            f.append('teamid',teamid)
            f.append('PDF',PDFfile)
            f.append('PPT',PPTfile)
            f.append('IMAGES',PICfile)
            f.append('VIDEOS',VIDfile)
            axios.post('http://localhost:5432/ideathon/idea/uploads',f).then(res => {return res.data })
            .then(res =>{
                if(res.msg)
                setfmsg(res.msg);
            })

            console.log(f)
            console.log(PICfile.type)
        }
    }
    
    const [idea,setIdea] = useState('');
    useEffect(()=>{
        if(teamid !=='')
        {
        console.log(teamid)
            const data = {teamid : teamid}
            fetch('http://localhost:5432/ideathon/idea/getIdea',
            {
                method : 'POST',
                headers : {
                    'content-type' : 'application/json; charset=UTF-8'
                },
                body : JSON.stringify(data)
            }).then(res => res.json())
            .then((res) => {
                if(res.msg)
                {
                    setIdea(res.msg)
                }
                else
                {
                    setIdea(res.teamName)
                }
            })
        }
    },[teamid])
    return(
        <>
        <form id="form" onSubmit={submit}>
            PDF FILE :
            <input type="file" onChange={(e) => {
                setPDFFile(e.target.files[0])
                setPDFType(e.target.value)} }/> { PDFi && PDFi}
             <br />

             PPT FILE :
            <input type="file" onChange={(e) => {
                setPPTFile(e.target.files[0])
                setPPTType(e.target.value)} }/> { PPTi && PPTi}
             <br />

             PIC FILE :
            <input type="file" onChange={(e) => {
                setPICFile(e.target.files[0])
                setPICType(e.target.value)} }/> { PICi && PICi}
             <br />

            VIDEO FILE :
            <input type="file" onChange={(e) => {
                setVIDFile(e.target.files[0])
                setVIDType(e.target.value)} }/> { VIDi && VIDi}
             <br />

            TEAMID :
            <input type="text" onChange={e => setteamid(e.target.value)} />  
            {
                idea && <>{idea}</>
            }
            <br />
            <input type="submit" value="Get me the stats!" />           
        </form>
        {
        fmsg && 
        <p>{fmsg}</p>
        }
        </>
    )
}

export default Uploads;