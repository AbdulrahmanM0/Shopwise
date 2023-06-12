import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass , faCartShopping , faBars , faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import Cartproduct from './../Cart/Cart_product';
import Subtotal from '../Cart/Subtotal';
import axios from 'axios';

let openNav = true;
let openCartNav = true;

function Search() {
    let responciveNav = document.querySelector(".responcive_list");
    const [productCount,setProductCount] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/posts").then(res=>setProductCount(res.data))
    },[productCount])
    function openNavbar(){
        if(openNav === false){
            document.querySelector(".responcive_list").classList.remove("active");
            openNav = true;
        }else if(openNav === true){
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