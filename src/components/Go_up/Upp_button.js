import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./Upp_button.css";
import { useState } from "react";

function Upp_button() {
    const [windowUp , setWindowUp] = useState();
    function goUpp(){
        console.log("up")
        window.scrollTo(0,0);
    }
    return ( 
        <div className="upp_button notactive">
            <button onClick={()=>goUpp()}>
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </div>
     );
}

export default Upp_button;