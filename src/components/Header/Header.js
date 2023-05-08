
import React from 'react';
import logo from  "../../assets/logo_dark.png";
import Search from './Search/Search';
import ResponciveNavebar from './Navbar/ResponciveNavbar';
import Searchbanar from './Search/Searchbanar';
import "./header.css";  //style
import Navbar from './Navbar/Navbar';


function Header() {

  window.onscroll = () => {
    if(window.scrollY >= 300){
      document.querySelector("header").firstChild.classList.add("main_head_scroll");
      document.querySelector(".upp_button").classList.remove("notactive");
    }else{
        document.querySelector("header").firstChild.classList.remove("main_head_scroll");
        document.querySelector(".upp_button").classList.add("notactive");
      }
  };

  return (
    <header>
        <div className='main_head'>
            <div className='header_container container'>
                <div className="nav_logo"><img src={logo} alt='logo'/></div>
                <Navbar />
            </div>
                <ResponciveNavebar />
        </div>
        <Searchbanar />
    </header>
  )
}

export default Header;