import Slider from "react-slick";
import img1 from "../../../assets/sliders/slider-1/furniture_insta1.jpg";
import img2 from "../../../assets/sliders/slider-1/furniture_insta2.jpg";
import img3 from "../../../assets/sliders/slider-1/furniture_insta3.jpg";
import img4 from "../../../assets/sliders/slider-1/furniture_insta4.jpg";
import img5 from "../../../assets/sliders/slider-1/furniture_insta5.jpg";
import img6 from "../../../assets/sliders/slider-1/furniture_insta6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Multi_carousel2() {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 3000,
        responsive: [
        {
        breakpoint: 975,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        },
    },{
        breakpoint: 490,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        },
    }
]
    };
    return ( 
        <section className="slider_section2">
            <div className="slider2">
                <div className="follow_box">
                <FontAwesomeIcon className="instgram_icon" icon={faEnvelope} />
                    <h3>instagram</h3>
                    <span>@shoppingzone</span>
                </div>
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
    )
}

export default Multi_carousel2;