import visa1 from "../../assets/visa.png";
import visa2 from "../../assets/discover.png";
import visa3 from "../../assets/master_card.png";
import visa4 from "../../assets/paypal.png";
import visa5 from "../../assets/amarican_express.png";

function Copyright() {
    return ( 
        <div className="copy_right">
            <p>© 2020 All Rights Reserved by Abdulrahman</p>
            <div>
                <img src={visa1} />
                <img src={visa2} />
                <img src={visa3} />
                <img src={visa4} />
                <img src={visa5} />
            </div>
        </div>
     );
}

export default Copyright;