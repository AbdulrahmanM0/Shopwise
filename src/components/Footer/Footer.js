import "./Footer.css";
import Copyright from "./Footer_copyright";
import Footer_options from "./Footer_options";

function Footer() {
    return ( 
        <footer>
            <div className="container">
                <Footer_options />
            <hr/>
                <Copyright />
            </div>
        </footer>
    );
}

export default Footer;