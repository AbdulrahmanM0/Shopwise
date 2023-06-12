import React from "react";

import ReactStars from "react-rating-stars-component";


function ReactRatingChange(props){
    const {rate} = props;
    return (
        <ReactStars count={5} size={24} emptyIcon={<i className="far fa-star"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="yellow" value={rate} edit={false} />
    )
}
export default ReactRatingChange;