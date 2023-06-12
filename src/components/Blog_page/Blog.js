
import "./Blog.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";
import Blog_head from "./Blog_head";


function Blog() {
    return ( 
        <section>
            <div className="cart_header">
                <div className="container">
                    <h1>Our Community</h1>
                </div>
            </div>
            <div>
                <Blog_head />
            </div>
        </section>
    );
}

export default Blog;