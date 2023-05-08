import Slider from "react-slick";

import img1 from "../../assets/sliders/slider-2/cl_logo1.png";
import img2 from "../../assets/sliders/slider-2/cl_logo2.png";
import img3 from "../../assets/sliders/slider-2/cl_logo3.png";
import img4 from "../../assets/sliders/slider-2/cl_logo4.png";
import img5 from "../../assets/sliders/slider-2/cl_logo5.png";
import img6 from "../../assets/sliders/slider-2/cl_logo6.png";



function Multi_carousel3() {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 3000,
        responsive: [
        {
        breakpoint: 1150,
        settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        },
        },
        {
        breakpoint: 975,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        },
        },
        {
        breakpoint: 765,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        },
        },
        {
        breakpoint: 490,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        },
        },
]
    };
    return ( 
        <section className="slider_section3">
            <div className="slider3 container">
                <Slider {...settings}>
                    <div>
                        <img src={img1} alt="product" />
                    </div>
                    <div>
                        <img src={img2} alt="product" />
                    </div>
                    <div>
                        <img src={img3} alt="product" />
                    </div>
                    <div>
                        <img src={img4} alt="product" />
                    </div>
                    <div>
                        <img src={img5} alt="product" />
                    </div>
                    <div>
                        <img src={img6} alt="product" />
                    </div>
                </Slider>
            </div>
        </section>
     );
}

export default Multi_carousel3;