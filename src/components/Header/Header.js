import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import ResponciveNavebar from './Navbar/ResponciveNavbar';
import Searchbanar from './Search/Searchbanar';
import logo from  "../../assets/logo_dark.png";
import Navbar from './Navbar/Navbar';
import Search from './Search/Search';
import React from 'react';
import "./header.css";  

function Header() {
  const headerElement = useRef(null)
  window.onscroll = () => {
    if(window.scrollY >= 300){
      headerElement.current.firstChild.classList.add("main_head_scroll");
      document.querySelector(".upp_button").classList.remove("notactive");
    }else{
      headerElement.current.firstChild.classList.remove("main_head_scroll");
        document.querySelector(".upp_button").classList.add("notactive");
      }
  };

  return (
    <header ref={headerElement}>
        <div className='main_head'>
            <div className='header_container container'>
                <div className="nav_logo"><NavLink to="/"><img src={logo} alt='logo'/></NavLink></div>
                <Navbar />
            </div>
                <ResponciveNavebar />
        </div>
        <Searchbanar />
    </header>
  )
}

export default Header;