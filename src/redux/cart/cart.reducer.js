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
        case "REMOVE_CART_ITEM":
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }
        case "DECREASE_CART_ITEM":
            const item = state.cartItems.find(item =>item.id === action.payload.id )
            if(item){
                if(item.quantity === 1){
                    return {
                        ...state,
                        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
                    }
                }
                else {
                    return {
                        ...state,
                        cartItems: state.cartItems.map(item => item.id===action.payload.id ? {...item,quantity:item.quantity-1} : item)
                    }
                }
            }
            return item;
        default:
            return state;
    }
}

export default cartReducer;