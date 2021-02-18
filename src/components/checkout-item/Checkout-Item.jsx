import React from 'react';
import "./checkout-item.scss";
import {connect} from "react-redux";
import {removeCartItem,addCartItem,decreaseCartItem} from "../../redux/cart/cart.action";

const CheckOutItem = ({item, dispatch}) => {
    const {name, imageUrl, quantity, price} = item;
    return (
        <div className="checkout-item">
            <div className="image">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="price">{price}</span>
            <div className="quantity" >
                <span className="arrow" onClick={()=>(dispatch(decreaseCartItem(item)))}>&#10094;</span>
                <span>{quantity}</span>
                <span className="arrow" onClick={()=>(dispatch(addCartItem(item)))}>&#10095;</span>
            </div>
            <span className="remove" onClick={() => dispatch(removeCartItem(item))}>&#10005;</span>
        </div>
    )

}
export default connect(null)(CheckOutItem);