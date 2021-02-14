import {addItemToCart} from "./cart.utils";

const INIT_STATE={
    hidden:true,
    cartItems:[]
}

const cartReducer = (state=INIT_STATE,action) =>{
    switch (action.type){
        case "TOGGLE_HIDDEN_CART":
            return{
                ...state,
                hidden: !state.hidden
            };
        case "ADD_CART_ITEM":
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload)
            }

        default:
            return state;
    }
}

export default cartReducer;