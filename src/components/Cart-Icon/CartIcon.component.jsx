import React from 'react';
import {ReactComponent as ShoppingCartIcon} from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import {toggleCartDropDown} from "../../redux/cart/cart.action";
import {connect} from "react-redux";

const CartIcon = ({toggleCartDropDown}) => (
    <div className="cart-icon" onClick={toggleCartDropDown}>
        <ShoppingCartIcon className="icon"/>
        <span className="count">0</span>
    </div>
)

const mapDispatchToProps = (dispatch) =>({
    toggleCartDropDown:() => dispatch (toggleCartDropDown())
})

export default connect(null,mapDispatchToProps)(CartIcon);