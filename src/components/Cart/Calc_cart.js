import { useEffect } from "react";
import { useState } from "react";

function Calc_cart(props) {
    const [priceCalc, setPriceCalc] = useState(0)
    const {priceCart} = props;

    let price = 0;
    useEffect(() => {
        if (priceCart && priceCart.length > 0) {
          for (let i = 0; i < priceCart.length; i++) {
            price += priceCart[i].price;
          }
          setPriceCalc(price);
        }
      }, [ priceCart , priceCalc ]);

    return (
        <div className="cart_total container">
            <h4>Cart Totals</h4>
            <div className="cart_item"><div>Cart Subtotal</div><div>${priceCalc}</div></div>
            <div className="cart_item"><div>Shipping</div><div>Free Shipping</div></div>
            <div className="cart_item"><div>Total</div><div>$0</div></div>
            <button>Proceed To CheckOut</button>
        </div>
    );
}

export default Calc_cart;