import React from "react";
import "./checkout.styles.scss"
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import {connect} from "react-redux";
import CheckOutItem from "../../components/checkout-item/Checkout-Item";
import StripeCheckoutButton from "../../components/StripeButton/strip.button";
const CheckOut = ({cartItems,totalPrice}) =>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="checkout-block">
                Product
            </div>
            <div className="checkout-block">
                Description
            </div>
            <div className="checkout-block">
                Price
            </div>
            <div className="checkout-block">
                Quantity
            </div>
            <div className="checkout-block">
                Remove
            </div>
        </div>
        {cartItems.map(item => <CheckOutItem key={item.id} item={item}/>)}
        <div className="total-price">
            Total:${totalPrice}
        </div>
        <StripeCheckoutButton/>
    </div>
)
const mapStateToProps = (state) => ({
    cartItems:selectCartItems(state),
    totalPrice:selectCartTotal(state)
})
export default connect(mapStateToProps)(CheckOut);