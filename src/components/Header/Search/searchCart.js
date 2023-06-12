import axios from "axios";
import { useState , useEffect } from "react";
import { NavLink } from "react-router-dom";

function SearchCart(props) {
    const [product,setProduct] = useState([]);

    useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then(res=>setProduct(res.data))
    },[]);

    return ( 
        <div className="Search_cart">
            {product.length > 0 && product.map(product=>
            {
                    return(
                    <NavLink to={`/products/${product.id}`}>    
                        <div className="pro" style={{ display: 'none' }}>
                            <div className="search_pro_container">
                                <img src={product.image} alt="product_img" />
                                <h5 className="product_name">{product.title}</h5>
                            </div>
                        </div>
                    </NavLink>
                    )
                }
            )}
        </div>
    );
}

export default SearchCart;