import '../styles/CartScreen.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import SideDrawer from '../components/SideDrawer';
import Backdrop from '../components/Backdrop';
import StripeCheckout from 'react-stripe-checkout';
// Components
import CartItem from '../components/CartItem';
import Footer from '../components/Footer';

// Actions
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const CartScreen = () => {
    const [sideToggle, setSideToggle] = useState(false);
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    useEffect(() => {}, []);

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    };

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const getCartSubTotal = () => {
        return cartItems
            .reduce((price, item) => price + item.price * item.qty, 0)
            .toFixed(2);
    };

    //Make Payment

    const makePayment = token => {
        const body = {
            token,
            product: cartItems,
            price: getCartSubTotal()

        };
        const headers = {
            'content-type': 'application/json'
        };

        return fetch('http://localhost:5000/payment', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        }).then(response => {
            console.log('RESPONSE', response);
            console.log('Payment Successfull');
            window.alert('Payment Successfull');
            const { status } = response;
            console.log('status', status);

            // Empty The cart after Succcesfull Payment
            cartItems.forEach(item => dispatch(removeFromCart(item.product)));
        }).catch(error => {
            console.log('ERROR', error);
            console.log('Payment Failure');
        });

    };


    return (
        <>
            <div className="cart-page">
                <Navbar click={() => setSideToggle(true)} />
                <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
                <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
                <div className="cartscreen__left">
                    <h2>Shopping Cart</h2>

                    {cartItems.length === 0 ? (
                        <div>
              Your Cart Is Empty <Link to="/home">Go Back</Link>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <CartItem
                                key={item.product}
                                item={item}
                                qtyChangeHandler={qtyChangeHandler}
                                removeHandler={removeFromCartHandler}
                            />
                        ))
                    )}
                </div>

                <div className="cartscreen__right">
                    <div className="cartscreen__info">
                        <p>Subtotal ({getCartCount()}) items</p>
                        <p>TOTAL(INR) : ${getCartSubTotal()}</p>
                    </div>
                    <div>
           
                        <StripeCheckout 
                            stripeKey="pk_test_51KACgtSGs8lWX3upb4DBdqX3DMI6k3aBYhKR9jH90UwnGtSH3RTGdj6BTO21aN482omqP4BRscxZsRlGSHmNxOqN008nsRdTlj"
                            token={makePayment} 
                            amount={getCartSubTotal() * 100 * 0.014}
                            shippingAddress
                            billingAddress
                            name="Buy Products" />
           
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default CartScreen;
