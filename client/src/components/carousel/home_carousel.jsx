import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from "react-bootstrap";
import first from './first.jpg';
import second from './second.jpg';
import third from './third.jpg';
import './hc.css';
function HomeCarousel(){
    return(
        <div id="home_carousel">
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={first}
                    alt="#"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src={second}
                    alt="#"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={third}
                    alt="#"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default HomeCarousel;