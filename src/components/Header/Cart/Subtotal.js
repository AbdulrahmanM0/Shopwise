import { useState , useEffect } from "react";
import "./Cart_product.css"
import axios from 'axios';

function Subtotal() {
    const [counter , setCounter] = useState([])
    useEffect(()=>{axios.get("http://localhost:3000/posts").then(res=> setCounter(res.data))},[]);
    let price = 0;
    for(let i = 0 ; i < counter.length ; i++){
        price = counter[i].price + price;
    }
    return (
        <div className="subtotal_container">
            <div className="subtotal_count">
                <h4>Subtotal</h4>
                <div>${price}</div>
            </div>
            <div className="cart_buttons">
                <button>
                    View Cart
                </button>
                <button>
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default Subtotal;
