import "./ProductSection.css";
import Product from './Products/Products';


function ProductSection() {
    return ( 
        <section className="products_section">
            <div className="container">
                <div className="header">
                    <h2>Exclusive Products</h2>
                </div>
                <div className="">
                    <Product />
                </div>
            </div>
        </section>
    );
}

export default ProductSection;