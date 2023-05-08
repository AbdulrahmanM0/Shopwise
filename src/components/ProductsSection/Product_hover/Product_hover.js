import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeCompare , faMagnifyingGlassPlus ,faHeart , faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./Product_hover.css";
import axios from "axios";
import { useEffect , useState } from "react";

function Producthover(props) {
    return ( 
        <div className="product_hover">
            <div>
            <FontAwesomeIcon className="icon" icon={faCodeCompare} />
            <FontAwesomeIcon className="icon" icon={faMagnifyingGlassPlus} />
            <FontAwesomeIcon className="icon" icon={faHeart} />
            </div>
        </div>
        );
    }
export function AddToCart(props) {
    const [product,setProduct] = useState({});
    const {title , img , price} = props;
    function sendData(){
        axios.post("http://localhost:3000/posts", {
            title,
            img,
            price
        }).then(res=>console.log(res));
// fetch("http://localhost:3000/posts",{ method: "POST",heaaders:{"Conent-type": "application/json",},body: JSON.stringify({title:title,img:img,price:price,})}
// ).then(data=>data.json()).then(res=>console.log(res));
    document.getElementById("cart_items").innerText++;
    }
    return (
        <div className="addToCart_container">
            <button onClick={()=>sendData()}>
                <FontAwesomeIcon className="add_cart" icon={faCartArrowDown} />
                Add to Cart
            </button>
        </div>
    )
}

export default Producthover;