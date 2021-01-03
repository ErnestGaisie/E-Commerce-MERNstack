import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

const initialState = {
  cartItems: [],
}

export const cartReducer = (state = initialState, action) => {
  // console.log(state.cartItems)
  switch (action.type) {
    case CART_ADD_ITEM:
      return {
        ...state,
        cartItems: action.payload
      }
    // const item = action.payload;

    // const existItem = state.cartItems.find((x) => x.product === item.product);

    // if (existItem) {
    //   return {
    //     ...state,
    //     cartItems: state.cartItems.map((x) =>
    //       x.product === existItem.product ? item : x
    //     ),
    //   };
    // } else {
    //   return {
    //     ...state,
    //     cartItems: [...state.cartItems, item],
    //   };
    // }
    default:
      return state
  }

};
