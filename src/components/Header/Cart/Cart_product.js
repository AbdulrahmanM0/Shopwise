import bannar1 from "../../../assets/banner7.jpg";
import './Cart_product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useState , useEffect} from "react";
import Product from './../../ProductsSection/Products/Products';

function Cartproduct(props) {
    const [product ,setProduct] = useState({});
    useEffect(()=>{
        axios.get("http://localhost:3000/posts").then(res=>setProduct(res.data))
    },[]);
    function deleteProduct(id){
        // fetch("http://localhost:3000/posts",{method: "DELETE",heaaders:{"Conent-type": "application/json",}}).then(data=>data.json()).then(res=>console.log(res));
        axios.delete(`http://localhost:3000/posts/${id}`).then(res=>console.log(res))
        document.getElementById(id).remove();
        if(document.querySelector(".cart_products_container").childElementCount == 0){document.querySelector(".cart_products_container").innerHTML = " <h4 class=empty_msg >YOUR CART IS EMPTY</h4>"};
        document.getElementById("cart_items").innerText--;
        if(document.getElementById("cart_items").innerText == 0 ){
        document.getElementById("cart_items").innerText = ""}
    }
    return (
        <>
        {product.length > 0 ? product.map(product=>
            <div key={product.title} id={product.id} className="cart_product">
                <img src={product.img} />
            <div>
                <h3>
                    {product.title.length > 20 ? product.title.substring(0,13)+"...": product.title}
                </h3>
                <p>
                    ${product.price}
                </p>
            </div>
                <FontAwesomeIcon className="close_product" onClick={()=>deleteProduct(product.id)} icon={faXmark} />
            </div>
        ) : <h4 className="empty_msg">YOUR CART IS EMPTY</h4>}
        </>
    );
}

export default Cartproduct;