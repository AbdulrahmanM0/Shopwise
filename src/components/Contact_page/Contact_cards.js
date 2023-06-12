import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap , faInbox , faMobileScreen } from '@fortawesome/free-solid-svg-icons';


function Contact_cards(){
    return (
        <div className='contact_cards_container'>
            <div className="contact_card">
                <FontAwesomeIcon icon={faMap} />
                <h5>Address</h5>
                <p>123 Street, Old Trafford, London, UK</p>
            </div>
            <div className="contact_card">
                <FontAwesomeIcon icon={faInbox} />
                <h5>faMobileScreen</h5>
                <p>info@yourmail.com </p>
            </div>
            <div className="contact_card">
                <FontAwesomeIcon icon={faMobileScreen} />
                <h5>Phone</h5>
                <p>+ 457 789 789 65</p>
            </div>
        </div>
    )
}
export default Contact_cards;