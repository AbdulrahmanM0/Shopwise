import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./Upp_button.css";

function Upp_button() {
    function goUpp(){
        window.scrollTo(0,0);
    }
    return ( 
        <div className="upp_button notactive">
            <button>
                <FontAwesomeIcon onClick={()=>goUpp()} icon={faArrowUp} />
            </button>
        </div>
     );
}

export default Upp_button;