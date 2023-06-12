import { useState , useEffect } from "react";
import "./Cart_product.css"
import axios from 'axios';
import { NavLink } from "react-router-dom";

function Subtotal() {
    const [counter , setCounter] = useState([])
    useEffect(()=>{axios.get("http://localhost:4000/posts").then(res=> setCounter(res.data))},[counter]);
    let price = 0;
    for(let i = 0 ; i < counter.length ; i++){
        price = counter[i].price + price;
    }
    return (
        <div className="subtotal_container">
            <div className="subtotal_count">
                <h4>Subtotal</h4>
                <div>${Math.floor(price)}</div>
            </div>
            <div className="cart_buttons">
                <NavLink to="/cart">
                    View Cart
                </NavLink>
                <NavLink>
                    Checkout
                </NavLink>
            </div>
        </div>
    );
}

export default Subtotal;
