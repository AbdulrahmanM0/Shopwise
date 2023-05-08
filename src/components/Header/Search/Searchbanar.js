import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Searchbanar() {
    function closebanar(){
        document.querySelector(".search_banar").classList.add("close_search")
    }
    return ( 
        <div className="search_banar close_search f-ac">
            <div className="container f-ac  ">
                <div className="search_box f-ac">
                <FontAwesomeIcon onClick={()=>{closebanar()}} className="icon close_icon" icon={faXmark} /> 
                    <input type="text"  placeholder="Search"/>
                </div>
            </div>
        </div>
    );
}

export default Searchbanar;