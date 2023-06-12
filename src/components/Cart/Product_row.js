import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus,faCircleMinus , faXmark } from '@fortawesome/free-solid-svg-icons';
import "./Cart.css";
import product from "../../assets/furniture_banner1.jpg";
import {useState} from "react";


function Product_row(props) {
    const {title,img,price,productId,handlDelete} = props;
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
    return ( 
        <tr id={productId} >
            
            <td className="products_col"><img src={img}/></td>
            <td className="products_col"><p>{title}</p></td>
            <td><span>${price}</span></td>
            <td><span className="number_btn"><FontAwesomeIcon icon={faCircleMinus} onClick={()=>handlDecrease()} /></span><input onChange={(e)=>handlChange(e)} type="number" min="1" value={count}/><span className="number_btn"><FontAwesomeIcon onClick={()=>handlIncrease()} icon={faCirclePlus} /></span></td>
            <td><span>${price * getNum()}</span></td>
            <td><FontAwesomeIcon  className='delete_product' onClick={(id)=>handlDelete(productId)} icon={faXmark} /></td>
        </tr>
    );
}

export default Product_row;