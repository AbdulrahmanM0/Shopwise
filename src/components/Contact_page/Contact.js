import Contact_cards from "./Contact_cards";
import Contact_dis from "./Contact_dis";
import Contact_sub from "./Contact_sub";
import "./Contact_page.css";

function Contact_page() {
    return ( 
        <>
        <section>
            <div className="cart_header contact_header">
                <div className="container">
                    <h1>Contact Us</h1>
                </div>
            </div>
            <div className="container">
                <Contact_cards />
            </div>
            
        </section>
        <Contact_dis />
        <Contact_sub />
        </>
    );
}

export default Contact_page;