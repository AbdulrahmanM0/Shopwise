import "./ProductSection.css";
import Product from './Products/Products';

function ProductSection() {
    return ( 
        <section className="products_section" id="products_section">
            <div className="cart_header">
                <div className="container">
                    <h1>Products</h1>
                </div>
            </div>
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