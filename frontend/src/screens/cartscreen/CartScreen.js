import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../../components/message/Message";
import { addToCart } from "../../actions/cartActions";
import "./CartScreen.css";
import { Link } from "react-router-dom";


const mapState = ({ cart }) => ({
  cartItems: cart.cartItems
})

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const { cartItems } = useSelector(mapState)

  const [cart, setCart] = useState([])

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  useEffect(() => {
    if(Array.isArray(cartItems) && cartItems.length !== 0) {
      console.log(cartItems)
      setCart(cartItems)
    }
  }, [cartItems])

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>

        {cart.length === 0 ? (
          <Message>
            Your cart is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush"></ListGroup>
        )}
      </Col>
      <Col md={2}></Col>
      <Col md={2}></Col>
    </Row>
  );
};

export default CartScreen;
