import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";
import SearchCart from "./searchCart";
import { useEffect, useRef} from "react";

function Searchbanar() {
    const search_box = useRef(null);
    useEffect(()=>{
        search_box.current.focus();
    },[])
    function closebanar(){
        document.querySelector(".search_banar").classList.add("close_search");
        document.querySelectorAll(".pro").forEach(pro=>pro.style.display = 'none');
        search_box.current.value = '';
    }
    function handlSearch(){
        let searchProduct = document.querySelectorAll(".product_name");
        let productCard = document.querySelectorAll(".pro");
        for(let i = 0; i < searchProduct.length; i++){
            if(searchProduct[i].innerText.toUpperCase().indexOf(search_box.current.value.toUpperCase()) >= 0){
                productCard[i].style.display = "block";
            }else{
                productCard[i].style.display = "none";
            }
        }
        handlNone();
    }
    function handlNone(){
        let productCard = document.querySelectorAll(".pro");
        if(search_box.current.value.length == 0){
            for(let i = 0; i < productCard.length ; i++){
                productCard[i].style.display = 'none';
            }
        }
        console.log(search_box.current)
    }
    return ( 
        <div className="search_banar close_search f-ac">
            <div className="container f-ac  ">
                <div className="search_box f-ac">
                <FontAwesomeIcon onClick={()=>{closebanar() }} className="icon close_icon" icon={faXmark} /> 
                    <div className="np_container" onChange={()=> handlSearch() }>
                        <input ref={search_box} type="text"  placeholder="Search"/>
                        <SearchCart />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Searchbanar;