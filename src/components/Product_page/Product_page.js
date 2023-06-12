import axios from "axios";
import {useEffect , useState , useRef , useContext} from "react";
import { useParams , NavLink } from "react-router-dom";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCirclePlus, faCartShopping , faCodeCompare , faHeart } from '@fortawesome/free-solid-svg-icons';
import ReactStars from 'react-rating-stars-component';
import { DataCenter } from "../DataContext";


function Product_page() {
    const productId = useParams().productId;
    const [product,setProduct] = useState({});
    const products = useContext(DataCenter);

    const img = useRef(null);

    useEffect(()=>{
        window.scrollTo(0,0);
    },[productId])

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${productId}`).then(res=>setProduct(res.data));
    },[]);
    function addToCart(){
        const checkingProduct = products.some(
            pro=>pro.img == product.image
        )
        if(!checkingProduct){
        axios.post(`http://localhost:4000/posts`,{
            title: product.title,
            img: product.image,
            price: product.price,
        }).then(res=>res)}else{
            console.log('it is')
        }
    }
    
    function zoom(e){
        
        let x = e.clientX * .2;
        let y = e.clientY * .2;
        if(x > 100){
            x = 100;
        }
        if(y > 100){
            y = 100;
        }
        img.current.style.cssText = `background-image: url(${product.image}); background-position: -${x}px -${y}px`;
    }
    function raguler(e){
        img.current.style.cssText= `background-image: url(${product.image});`;
    }

    const [count , setCount ] = useState(1);
    function handlChange(e){
        if(e.target.value >= 1){
        return setCount(e.target.value)
        }else{
            return setCount(1)
        }
    }
    function handlDecrease(){
        if(count > 1){
            return setCount(count - 1)
        }else{
            return setCount(1)
        }
    }
    function handlIncrease(){
        if(count >= 1){
            return setCount(count + 1)
        }else{
            return setCount(1)
        }
    }
    function getNum(){
        return count;
    }

    console.log(product.rating);
    return ( 
        <section>
            <div className="container product_details_page">
                <div className="product_imgs">
                    <div className="wide_img" onMouseMove={(e)=>{zoom(e)}} onMouseOut={(e)=>{raguler(e)}} >
                        <div ref={img} className="img" style={{backgroundImage: `url(${product.image})`}}  ></div>
                    </div>
                    <div className="narro_img">
                        <img src={product.image} />
                        <img src={product.image} />
                        <img src={product.image} />
                        <img src={product.image} />
                    </div>
                </div>
                <div className="product_dis">
                    <h3>{product.title}</h3>
                    <div className="product_price">${product.price}
                    {product.rating && (
                    <div>
                        <ReactStars
                        count={5}
                        size={24}
                        emptyIcon={<i className="far fa-star"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="yellow"
                        value={product.rating.rate}
                        edit={false}
                        />

                    </div>
                    )}
                    </div>
                    <p>{product.description}</p>
                    <div className="add_cart_part">
                        <div className="add_and_get"><span className="number_btn"><FontAwesomeIcon icon={faCircleMinus} onClick={()=>handlDecrease()} /></span><input onChange={(e)=>handlChange(e)} type="number" min="1" value={count}/><span className="number_btn"><FontAwesomeIcon onClick={()=>handlIncrease()} icon={faCirclePlus} /></span></div>
                        <button onClick={()=>addToCart()} className="add_to_cart_btn"><FontAwesomeIcon icon={faCartShopping} /><span>Add To Cart</span></button>
                        <div>
                        <NavLink to="/"><FontAwesomeIcon className="icon" icon={faCodeCompare} /></NavLink>
                        <NavLink to="/"><FontAwesomeIcon className="icon" icon={faHeart} /></NavLink> 
                        </div>
                    </div>
                    <div>
                        <div className="category_part"><span>Category: </span>  {product.category}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product_page;