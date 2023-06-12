import { faTruck , faHeadset , faHandHoldingDollar , faUserShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Services(){
    return ( 
        <section className="services_section container">
            <div className="service">
                <div>
                    <FontAwesomeIcon className="icon_service" icon={faTruck} />
                </div>
                <div>
                    <h5>Free Delivery</h5>
                    <p>Worldwide</p>
                </div>
            </div>
            <div className="service">
                <div>
                    <FontAwesomeIcon className="icon_service" icon={faHandHoldingDollar} />
                </div>
                <div>
                    <h5>Money Returns</h5>
                    <p>30 Days money return</p>
                </div>
            </div>
            <div className="service">
                <div>
                    <FontAwesomeIcon className="icon_service" icon={faHeadset} />
                </div>
                <div>
                    <h5>27/4 Online Support</h5>
                    <p>Customer Support</p>
                </div>
            </div>
            <div className="service">
                <div>
                    <FontAwesomeIcon className="icon_service" icon={faUserShield} />
                </div>
                <div>
                    <h5>Payment Security</h5>
                    <p>Safe Payment</p>
                </div>
            </div>
        </section>
    );
}

export default Services;