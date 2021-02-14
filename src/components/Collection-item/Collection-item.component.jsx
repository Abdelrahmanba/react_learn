import React from "react";
import "./Collection-item.styles.scss"
import CustomButton from "../Custom-button/CustomButton.compnent";
import {addCartItem} from "../../redux/cart/cart.action";
import {connect} from "react-redux";

const CollectionItem = ({item,addCartItem}) => {
    const {id, name, price, imageUrl}  = item;
    return(
        <div className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className="collection-footer">
                <span>{name}</span>
                <span>{price}</span>
            </div>
            <CustomButton inverted onClick={() => addCartItem(item)}>Add to cart</CustomButton>
        </div>
    )
}
const mapDispatchToProps= dispatch=>({
    addCartItem:item => dispatch(addCartItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);