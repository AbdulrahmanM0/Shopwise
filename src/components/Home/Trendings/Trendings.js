import axios from "axios";
import { useEffect , useState } from "react";
import Spin from './../Spinner/Spinner';
import "./trending.css";
import ProductCard from './../ProductsSection/Products/ProductCard';

function Trending() {
    const [trending , setTrending] = useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products?limit=5').then(res=>setTrending(res.data))
    },[]);
    console.log(trending)
    return ( 
        <section className="section trending">
            <div className="container products_container">
            {trending.length > 0 ? trending.map(product=><div key={product.id}><ProductCard img={product.image} title={product.title} price={product.price} rate={product.rating.rate} rateCount={product.rating.count}/></div>) : <Spin />}
            </div>
        </section>
    );
}

export default Trending;