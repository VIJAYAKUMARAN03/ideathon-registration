import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/home/home";
import Login from "./pages/signin/login_split";
import Signup from "./pages/signup/signup_split";
import LoginStudent from "./pages/signin/login_student";
import LoginTeacher from "./pages/signin/login_teacher";
import SignupStudent from "./pages/signup/signup_student";
import SignupTeacher from "./pages/signup/signup_teacher";
import ProfileStudent from "./pages/student/student_profile";
import ProfileTeacher from "./pages/teacher/teacher_profile";
import IdeaRegister from "./pages/idea/idea_register";
import HomeStudent from "./pages/student/student_home";
import UpdateProfileStudent from "./pages/student/student_profile_update";
import StudentPasswordChange from "./pages/student/student_password_change";
import Uploads from "./pages/upload/uploading_files";
import Get_Uploads from "./pages/upload/get_uploads";
function Routess()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login_split" element={<Login />}/>
                <Route path="/signup_split" element={<Signup />}/>
                <Route path="/login_student" element={<LoginStudent/>}/>
                <Route path="/login_teacher" element={<LoginTeacher/>}/>
                <Route path="/signup_student" element={<SignupStudent/>}/>
                <Route path="/signup_teacher" element={<SignupTeacher/>}/>
                <Route path="/home_student" element = {<HomeStudent/>} />
                <Route path="/profile_student" element = {<ProfileStudent/>}/>
                <Route path="/profile_student_update" element = {<UpdateProfileStudent/>}/>
                <Route path="/student_password_change" element = {<StudentPasswordChange/>}/>
                <Route path="/profile_teacher" element = {<ProfileTeacher/>} />
                <Route path="/idea_register" element = {<IdeaRegister/>} />
                <Route path="/uploads" element = {<Uploads/>} />
                <Route path="/get_uploads" element = {<Get_Uploads/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Routess;
