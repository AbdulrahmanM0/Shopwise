import { useEffect , useState} from "react";
import Spin from './../../Spinner/Spinner';
import ProductCard from "./ProductCard";
import axios from "axios";
import "../ProductSection.css";
import "./productCard.css";



function Product() {
    const [product , setProduct] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then(res=>setProduct(res.data))}
        ,[])
    return ( 
        <>
        <div className="products_container">
            {product.length > 0 ? product.map(product=><div key={product.id}><ProductCard productId={product.id} img={product.image} title={product.title} price={product.price} rate={product.rating.rate} rateCount={product.rating.count}/></div>) : <Spin />}
        </div>
        </>
    );
}

export default Product;