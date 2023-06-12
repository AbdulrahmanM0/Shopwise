import { useState } from 'react';
import axios from 'axios';

function Contact_form() {
    const [userName , setUserName] = useState('');
    const [userMail , setUserMail] = useState('');
    const [userPhone , setUserPhone] = useState('');
    const [subject , setSubject] = useState('');
    const [userMessage , setUserMessage] = useState('');
    function handlForm(){
        axios.post('http://localhost:4000/messages',{
            name: userName,
            email: userMail,
            phone: userPhone,
            subject,
            message: userMessage
        }).then(res=>res)
    }
    function handlReset(e){
        e.target.value = '';
    }
    function handlName(e){
        setUserName(e.target.value);
    }
    function handlMail(e){
        setUserMail(e.target.value);
    }
    function handlPhone(e){
        setUserPhone(e.target.value);
    }
    function handlSubject(e){
        setSubject(e.target.value);
    }
    function handlMessage(e){
        setUserMessage(e.target.value);
    }
    function submitForm(e){
        e.preventDefault();
        handlForm()
      
    }

    return ( 
    <form className="contact_form" onSubmit={(e)=>submitForm(e)}>
        <input type="text" onChange={(e)=>handlName(e)} placeholder="Enter Name *" required />
        <input type="email" onChange={(e)=>handlMail(e)} placeholder="Enter Email *" required/>
        <input type="text" onChange={(e)=>handlPhone(e)} placeholder="Enter Phone No. *" required/>
        <input type="text" onChange={(e)=>handlSubject(e)} placeholder="Enter Subject *" required/>
        <textarea placeholder="Message *" onChange={(e)=>handlMessage(e)} rows="4" required/>
        <input type="submit" value="Send Message" />
    </form>
    );
}

export default Contact_form;