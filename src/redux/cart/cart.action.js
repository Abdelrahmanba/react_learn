export const toggleCartDropDown = () =>({
  type:"TOGGLE_HIDDEN_CART"
})

export const addCartItem = (item) =>({
  type:"ADD_CART_ITEM",
  payload:item
})

export const removeCartItem = (item) =>({
  type:"REMOVE_CART_ITEM",
  payload:item
})

export const decreaseCartItem = (item) => ({
  type:"DECREASE_CART_ITEM",
  payload:item
})

