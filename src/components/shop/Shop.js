import axios from "axios";
import { useEffect , useState} from "react";
import Shop_nav from "./Shop_nav";
import "./Shop.css";
import ProductCard from './../ProductsSection/Products/ProductCard';
import Spin from './../Spinner/Spinner';
import { Pagination } from "@mui/material";

function Shop_page() {
    const [ products , setProducts ] = useState([]);
    const [ productCat , setProductCat ] = useState([]);
    const product_URL = 'https://fakestoreapi.com/products';

    useEffect(()=>{
        axios.get(`${product_URL}/categories`).then(res=>setProducts(res.data));
    },[])
    useEffect(()=>{
        axios.get(`${product_URL}`).then(res=>setProductCat(res.data));
    },[])
    function getCat(cate){
        console.log()
        axios.get(`${product_URL}/category/${cate}`).then(res=>setProductCat(res.data));
    }
    function allProducts(){
        axios.get(`${product_URL}`).then(res=>setProductCat(res.data));
    }
    return (
        <section>
            <div className="cart_header">
                <div className="container">
                    <h1>Shop</h1>
                </div>
            </div>
            <div className="category_shop">
                <div className="container category_btn">
                    {products.length > 0 && products.map(cate=> <button onClick={()=>getCat(cate)}>{cate}</button>)}
                    <button onClick={()=>allProducts()}>All</button>
                </div>
                <div>
                    <div className="products_container container">
                        {productCat.length > 0 ? productCat.map(product=><div key={product.id}><ProductCard productId={product.id} img={product.image} title={product.title} price={product.price} rate={product.rating.rate} rateCount={product.rating.count}/></div>) : <Spin />}
                    </div>
                </div>
            </div>
            <div className="page_num_container">
                <Pagination className="page_num" count={10} color="primary" />
            </div>
        </section>
    );
}

export default Shop_page;