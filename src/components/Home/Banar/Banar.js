import bannar4 from "../../../assets/furniture_banner1.jpg";
import bannar5 from "../../../assets/furniture_banner2.jpg";
import "./Bannar.css";
import {NavLink} from "react-router-dom";

function Bannar() {
    return ( 
        <section className="bannar_section">
            <div className="container bannar_container">
                <div className="f_bannar bannar">
                    <div className="bannar_text">
                        <span>Super Sale</span>
                        <h3>New Collection</h3>
                        <NavLink to="/shopping" className="shop_nowb">Shop Now</NavLink>
                    </div>
                    <img src={bannar4} alt="" />
                </div>
                <div className="s_bannar bannar">
                <div className="bannar_text s_text">
                        <h3>New Season</h3>
                        <span>Sale 40% Off</span>
                        <NavLink to="/shopping" className="shop_nowb">Shop Now</NavLink>
                    </div>
                    <img src={bannar5} alt="" />
                </div>
            </div>
        </section>
     );
}

export default Bannar;