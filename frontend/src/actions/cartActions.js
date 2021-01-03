import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {

  const cartItems = getState().cart.cartItems
  const { data } = await axios.get(`/api/products/${id}`);
  console.log(cartItems)
  const cart = []
  if (Array.isArray(cartItems)) {
    cartItems.map(item => {
      if (item.product === data._id) {
        qty = qty + 1
      }
    })
  }

  cart.push({
    product: data._id,
    name: data.name,
    image: data.image,
    price: data.price,
    countInSTock: data.countInSTock,
    qty: qty,
  })
  dispatch({
    type: CART_ADD_ITEM,
    payload: cart
  })
  // dispatch({
  //   type: CART_ADD_ITEM,
  //   payload: {
  //     product: data._id,
  //     name: data.name,
  //     image: data.image,
  //     price: data.price,
  //     countInSTock: data.countInSTock,
  //     qty: qty,
  //   },
  // });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
