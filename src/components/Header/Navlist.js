import {NavLink} from "react-router-dom";

function Navlist() {
    return ( 
        <ul className='nav_list Nav'>
            <li className='Nav' ><NavLink className='Nav' to="/">HOME</NavLink></li>
            <li className='Nav' ><NavLink className='Nav' to="/products">PRODUCTS</NavLink></li>
            <li className='Nav' ><NavLink className='Nav' to="/blog">BLOG</NavLink></li>
            <li className='Nav' ><NavLink className='Nav' to="/shopping">SHOP</NavLink></li>
            <li className='Nav' ><NavLink className='Nav' to="/contact">CONTACT US</NavLink></li>
        </ul>
    );
}

export default Navlist;