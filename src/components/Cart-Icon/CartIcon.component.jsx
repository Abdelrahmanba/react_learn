import React from 'react';
import {ReactComponent as ShoppingCartIcon} from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import {toggleCartDropDown} from "../../redux/cart/cart.action";
import {connect} from "react-redux";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

const CartIcon = ({toggleCartDropDown, count}) => (
    <div className="cart-icon" onClick={toggleCartDropDown}>
        <ShoppingCartIcon className="icon"/>
        <span className="count">{count}</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropDown: () => dispatch(toggleCartDropDown())
})

const mapStateToProps = (state) => ({
    count: selectCartItemsCount(state)
})

export default connect(mapStateToProps , mapDispatchToProps)(CartIcon);