import Contact_form from "./Contact_form";
import Contact_map from "./Contact_map";

function Contact_dis(){
    return (
    <>
        <section>
            <div className=" container contact_dis_map">
                <div className="contact_form_container">
                    <div>
                        <h2>Get In Touch</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    </div>
                    <div className="">
                        <Contact_form />
                    </div>
                </div>
                <div className="contact_map">
                    <Contact_map />
                </div>
            </div>
        </section>
    </>
    )
}
export default Contact_dis;