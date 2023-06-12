import { NavLink } from 'react-router-dom';
import Producthover, { AddToCart } from './../Product_hover/Product_hover';
import ReactRatingChange from '../../rating/Rating';
import Rating from 'react-rating';

function ProductCard(props) {
    const {title , img , price , rate , rateCount , productId} = props;
    
    return (
        <>
            <div className="product_card">
                <div className="card_img">
                    <img src={img}  alt={title} />
                    <Producthover productId={productId} title={title} img={img} price={price} />
                </div>
                <div className="product_details">
                <NavLink to={`/products/${productId}`}><h4>{title.length > 20 ? title.substring(0,15) : title}...</h4></NavLink>
                    <div className='rtv'>
                        <AddToCart title={title} img={img} price={price} />
                        <p>${price}</p>
                        <div className="rating">
                            <div className="rate">{/*rate*/}<ReactRatingChange rate={rate}/> </div>
                            <span className="count">({rateCount})</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;