import carouselImg1 from "../../assets/Carousel/Hbc56083ed0924dba82fc2cd64c6cabaeZ.jpg_960x960.webp";
import carouselImg2 from "../../assets/Carousel/717wE38vaGL._AC_SL1500_.jpg";
import carouselImg3 from "../../assets/Carousel/maxresdefault.jpg";
import carouselImg4 from "../../assets/Carousel/H9b19ce0eeb7e47ab864e86549eceb1fep.jpg";
import './Banner.css';

// import Aos from "aos";
// import "aos/dist/aos.css"
// import { useEffect } from "react";

const Banner = () => {
    // useEffect(()=>{
    //     Aos.init()
    // },[])

    return (
        <div className="bg-slate-400 text-center py-5">
            <div className="carousel w-full" data-aos="fade-up">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={carouselImg1} className="carouselImg" alt="Carousel Image 1" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 lg:left-40 lg:right-40">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={carouselImg2} className="carouselImg" alt="Carousel Image 2" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 lg:left-40 lg:right-40">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={carouselImg3} className="carouselImg" alt="Carousel Image 3" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 lg:left-40 lg:right-40">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={carouselImg4} className="carouselImg" alt="Carousel Image 4" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 lg:left-40 lg:right-40">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
