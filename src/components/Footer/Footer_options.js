import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot , faEnvelope , faPhone , faFacebook , faTwitter , faGooglePlus , faYouTube , faInstagramSquare , faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import { useState , useRef } from 'react';
import axios from 'axios';

function Footer_options() {
    const [mail , setMail] = useState('');
    const mailHolder = useRef(null);
    function sendMail(){
        axios.post('http://localhost:4000/mails',{
            mail:mail
        }).then(res=>res);
        mailHolder.current.value = '';
    }
    function handlInput(e){
        setMail(e.target.value)
    }

    return ( 
        <div className="footer_options">
            <div className="list">
                <h5>Contact info</h5>
                <ul className="location">
                    <li className="map"><FontAwesomeIcon icon={faLocationDot} /><a>123 Street, Old Trafford, NewYork, USA</a></li>
                    <li className="mail"><FontAwesomeIcon icon={faEnvelope} /><a> info@sitename.com</a></li>
                    <li className="phone"><FontAwesomeIcon icon={faPhone} /><a> + 457 789 789 65</a></li>
                    <li>
                    {/* <a><FontAwesomeIcon icon={faFacebook} /></a> */}
                    {/* <a><FontAwesomeIcon icon={faTwitter} /></a> */}
                    {/* <a><FontAwesomeIcon icon={faGooglePlus} /></a> */}
                    {/* <a><FontAwesomeIcon icon={faYouTube} /></a> */}
                    {/* <a><FontAwesomeIcon icon={faInstagramSquare} /></a> */}
                    </li>
                </ul>
            </div>
            <div className="list">
                <h5>Useful Links</h5>
                <ul className="location">
                    <li><a>About Us</a></li>
                    <li><a> FAQ</a></li>
                    <li><a>Location</a></li>
                    <li><a>Affiliates</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div className="list">
                <h5>My Account</h5>
                <ul className="location">
                    <li><a>My Account</a></li>
                    <li><a> Discount</a></li>
                    <li><a>Returns</a></li>
                    <li><a>Orders History</a></li>
                    <li><a>Order Tracking</a></li>
                </ul>
            </div>
            <div className="list">
                <h5>Subscribe Our Newsletter</h5>
                <p>If you want to get an email from us every time we <br/> have a new special offer, then sign up here!</p>
                <div className='mail_sender'>
                    <input type='email' ref={mailHolder} onChange={(e)=>handlInput(e)} placeholder='Enter your mail' />
                    <button onClick={()=>sendMail()}><FontAwesomeIcon icon={faEnvelopeOpenText} /></button>
                </div>

            </div>
        </div>
     );
}

export default Footer_options;