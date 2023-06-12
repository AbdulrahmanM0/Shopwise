import { useState , useRef} from 'react';
import axios from 'axios';

function Contact_sub() {
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
        <div className="contact_sub">
            <div className="container contact_sub_container">
            <h3> Subscribe Our Newsletter </h3>
            <div>
                <input type="mail" ref={mailHolder} onChange={(e)=>handlInput(e)} placeholder="Enter Email Address" />
                <button onClick={()=>sendMail()}>Subscribe</button>
            </div>
            </div>
        </div>
    );
}

export default Contact_sub;