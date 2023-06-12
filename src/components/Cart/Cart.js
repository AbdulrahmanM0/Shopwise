import { useEffect , useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartFlatbed } from '@fortawesome/free-solid-svg-icons';
import Product_row from "./Product_row";
import Calc_cart from "./Calc_cart";
import axios from "axios";
import "./Cart.css";


function Cart(){
    const [product , setProduct] = useState({})
    
    useEffect(()=>{
        axios.get("http://localhost:4000/posts").then(res=>setProduct(res.data));
    },[product])

    function handlDelete(id){
        axios.delete(`http://localhost:4000/posts/${id}`).then(res=>res);
        axios.get("http://localhost:4000/posts").then(res=>setProduct(res.data));
    }
    return ( 
        <div className="cart_section">
            <div className="cart_header">
                <div className="container">
                    <h1>Shopping Cart</h1>
                </div>
            </div>
            <div className="container cart_table">
                <table>
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                        {product.length > 0 && product.map(product=><Product_row key={product.img} title={product.title} img={product.img} price={product.price} productId={product.id} handlDelete={handlDelete}/> )}
                </table>
            </div>
            <div className="cart_split container">
                <div className="relative"><FontAwesomeIcon icon={faCartFlatbed} /></div>
            </div>
            <Calc_cart priceCart={product} />
        </div>
    );
}
export default Cart;