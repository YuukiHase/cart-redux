import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as messages from './../constants/Message';
import * as actions from './../actions/index';

class CartContainer extends React.Component {
    render() {
        let { cart } = this.props;
        return (
            <Cart>
                { this.showCartItem(cart) }
                { this.showTotalAmount(cart) }
            </Cart>
        );
    }

    showCartItem = (cart) => {
        let { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props;
        let result = <tr><td>{messages.MSG_CART_EMPTY}</td></tr>;
        if(cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem 
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onChangeMessage={onChangeMessage}
                        onUpdateProductInCart={onUpdateProductInCart}
                    />
                );
            })
        }
        return result;
    }

    showTotalAmount = (cart) => {
        let result = null;
        let total = 0;
        if(cart.length > 0) {
            for(let i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;
            }
            result = <CartResult total={ total } />
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actions.actDeleteProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actions.actChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actions.actUpdateProductInCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
