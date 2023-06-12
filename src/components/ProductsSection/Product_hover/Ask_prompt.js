import { useRef } from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Ask_prompt.css";
 

function Get_response() {
    const prompt = useRef(null);
    
    // function handlAddToCart(){   
    // }

    function handelClose(){
        prompt.current.style.display = "none";
    }
    return (
    <div
        ref={prompt}
        className="ask_prompt modal show"
        style={{ position: 'initial' }}
    >
        <Modal.Dialog>
        <Modal.Header>
            <Modal.Title></Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>Are you sure ?, we will add the product to your cart .</p>
        </Modal.Body>

        <Modal.Footer>
            <Button onClick={()=>handelClose()} variant="secondary">Close</Button>
            <Button onClick={()=>handelClose()} variant="primary">Add To Cart</Button>
        </Modal.Footer>
        </Modal.Dialog>
    </div>
    );
}

export default Get_response;