import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Message from '../components/Message.js';
import { addToCart } from '../actions/cartActions.js';

const Cart = ({ match, location, history }) => {
    const productId = match.params.id;

    const quantity = location.search ? Number(location.search.split('=')[1]) : 1;

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    

    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, quantity));
        }
    }, [dispatch, productId, quantity])
    return (
        <div>
            Cart Here
        </div>
    )
}

export default Cart;
