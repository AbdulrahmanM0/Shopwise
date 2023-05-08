import Producthover, { AddToCart } from './../Product_hover/Product_hover';


function ProductCard(props) {
    const {title , img , price , rate , rateCount} = props;
    return ( 
        <>
            <div className="product_card">
                <div className="card_img">
                    <img src={img}  alt={title} />
                    <Producthover title={title} img={img} price={price} />
                </div>
                <div className="product_details">
                    <h4>{title.length > 20 ? title.substring(0,15) : title}...</h4>
                    <div className='rtv'>
                        <AddToCart title={title} img={img} price={price} />
                        <p>${price}</p>
                        <div className="rating">
                            <div className="rate">{rate}</div>
                            <span className="count">({rateCount})</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;