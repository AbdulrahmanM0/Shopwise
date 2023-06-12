import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeCompare , faMagnifyingGlassPlus ,faHeart , faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect , useState , useRef , useContext  } from "react";
import { NavLink } from "react-router-dom";
import { DataCenter } from '../../DataContext';
// import { productImg } from './Product_hover';
import Get_response from "./Ask_prompt";
import axios from "axios";
import "./Product_hover.css";



function Producthover(props) {
    const {productId} = props;

    return ( 
        <div className="product_hover">
            <div>
                <NavLink to=""><FontAwesomeIcon className="icon" icon={faCodeCompare} /></NavLink>
                <NavLink to={`/products/${productId}`}><FontAwesomeIcon className="icon" icon={faMagnifyingGlassPlus} /></NavLink>
                <NavLink to="/"><FontAwesomeIcon className="icon" icon={faHeart} /></NavLink> 
            </div>
        </div>
        );
    }


export function AddToCart(props) {
    const { title , img , price } = props;
    const cartButton = useRef(null);
    const products = useContext(DataCenter);
  
    function sendData(){  
        const checkingProduct = products.some(pro=> pro.img == img);
                if(!checkingProduct){
                    getResponse();
                axios.post("http://localhost:4000/posts", {
                    title,
                    img,
                    price
                }).then(res=>res);}else{
                    console.log('any')
        }
    }

    function getResponse(){
        const res = document.querySelector(".ask_prompt");
        res.style.display = "flex";
    }

    return (
        <div className="addToCart_container">
            <button onClick={()=>sendData()} ref={cartButton}>
                <FontAwesomeIcon className="add_cart" icon={faCartArrowDown} />
                Add to Cart
            </button>
        </div>
    )
}

export default Producthover;