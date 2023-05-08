import Slider from "react-slick";
import React, { Component } from 'react';
import "./Carousel.css";

import axios from "axios";
import { useEffect , useState } from "react";
import Spin from './../Spinner/Spinner';
import ProductCard from "../ProductsSection/Products/ProductCard";

function SimpleSlider(){
  const [trending , setTrending] = useState([]);
  useEffect(()=>{
      axios.get('https://fakestoreapi.com/products?limit=5').then(res=>setTrending(res.data))
  },[]);
    function responsivWidth(){
      let w = window.innerWidth;
      if(w >= 1370){
        return 5;
      }else if(w <= 1369 && w >= 975){
        return 4;
      }else if(w <= 974 && w >= 762){
      return 3;
      }else if(w <= 761 && w >= 455){
      return 2;
      }else{
        return 1;
      }
    }
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: responsivWidth(),
      slidesToScroll: 1,
      autoplay: true,
      autoplayspeed: 3000,
    };
    return (
      <div className="container trending_carousel">
        <Slider {...settings}>
            {trending.length > 0 ? trending.map(product=><div key={product.id}><ProductCard img={product.image} title={product.title} price={product.price} rate={product.rating.rate} rateCount={product.rating.count} /></div>) : <Spin />}
        </Slider>
      </div>
    );
  }

export default SimpleSlider;