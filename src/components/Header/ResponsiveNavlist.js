import { NavLink } from 'react-router-dom';

function ResponciveNavlist() {

    function handlBackUp(){
    window.scrollTo(0,0)
    }
    return ( 
        <ul className='responcive_nav_list Nav'>
            <li className='Nav' ><NavLink className='Nav' to="/" onClick={()=>handlBackUp()} >HOME</NavLink></li>
            <li className='Nav' ><NavLink className='Nav' to="/products" onClick={()=>handlBackUp()} >PRODUCTS</NavLink></li>
            <li className='Nav' ><NavLink className='Nav' to="/blog" onClick={()=>handlBackUp()} >BLOG</NavLink></li>
            <li className='Nav' ><NavLink className='Nav' to="/shopping" onClick={()=>handlBackUp()} >SHOP</NavLink></li>
            <li className='Nav' ><NavLink className='Nav' to="/contact" onClick={()=>handlBackUp()} >CONTACT US</NavLink></li>
        </ul>
    );
}

export default ResponciveNavlist;