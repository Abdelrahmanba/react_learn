import React from "react";
import CustomButton from "../Custom-button/CustomButton.compnent";
import CartItem from "../cart-item/CartItem.compnent";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import "./cartdropdown.scss";
import {toggleCartDropDown} from "../../redux/cart/cart.action";
const CartDropDown = ({cartItems,history,dispatch})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length?
                cartItems.map(item=>(<CartItem key={item.id} item={item}/>)):
                    <span className="empty-msg">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push("/checkout")
            dispatch(toggleCartDropDown())
        }}>CHECKOUT</CustomButton>

    </div>
)

const mapStateToProps = ({cart:{cartItems}})=>({
    cartItems:cartItems
})
export default withRouter(connect(mapStateToProps)(CartDropDown));