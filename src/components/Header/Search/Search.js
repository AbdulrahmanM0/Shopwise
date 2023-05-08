import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass , faCartShopping , faBars , faXmark } from '@fortawesome/free-solid-svg-icons';
import Cartproduct from './../Cart/Cart_product';
import Subtotal from '../Cart/Subtotal';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


let openNav = true;
let openCartNav = true;
function Search() {
    let responciveNav = document.querySelector(".responcive_list");
    const [productCount,setProductCount] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/posts").then(res=>setProductCount(res.data))
    },[])
    
    function openNavbar(){
        if(openNav === false){
            console.log(document.querySelector(".responcive_list"))
            document.querySelector(".responcive_list").classList.remove("active");
            openNav = true;
        }else if(openNav === true){
            console.log(document.querySelector(".responcive_list"))
            document.querySelector(".responcive_list").classList.add("active");
            openNav = false;
        }
    }
    function openSearch(){
        document.querySelector(".search_banar").classList.add("open_search");
        document.querySelector(".search_banar").classList.remove("close_search");
    }
    function openCart(){
        if(openCartNav){
        document.querySelector(".inside_cart").classList.add("active");
        openCartNav = false;

    }else{
        document.querySelector(".inside_cart").classList.remove("active");
        openCartNav = true;
    }
    
    }
    return ( 
        <div className="search_cart">
            <FontAwesomeIcon onClick={()=>{openSearch()}} className="icon" icon={faMagnifyingGlass} />
            <div className="cart">
                <span id='cart_items'>{productCount.length > 0 && productCount.length}</span>
                <FontAwesomeIcon onClick={()=>{openCart()}} className="icon" icon={faCartShopping} />
                <div className="inside_cart">
                    <div className='cart_products_container'>
                        <Cartproduct />
                    </div>
                    <Subtotal />
                </div>
            </div>
            <div className="search_container">
                { openNav === true ? <FontAwesomeIcon onClick={()=>{openNavbar()}} className="icon" icon={faBars} /> : <FontAwesomeIcon onClick={()=>{openNavbar()}} className="icon" icon={faXmark} /> }
            </div>
        </div>
    );
}

export default Search;