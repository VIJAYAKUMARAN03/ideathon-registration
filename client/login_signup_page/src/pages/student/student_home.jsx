import React from "react";
import NavBar from "../../components/navbar/nav_student";
import HomeCarousel from "../../components/carousel/home_carousel";
import HomeStudentCard from "../../components/cards/home_student_card";
import { useLocation } from "react-router-dom";
function HomeStudent(){

    const location = useLocation();
    const state = location.state;
    return(
        <>
            <NavBar state = {state}/>
            <HomeCarousel/>
            <HomeStudentCard/>
        </>
    )
}
export default HomeStudent;