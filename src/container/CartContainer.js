
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import PropTypes from 'prop-types';
import * as Messages from '../constants/Messages';
import Total from '../components/Total';
import {actDeleteProductInCart, actChangeMessage, actUpdateProductInCart} from '../actions/index';

class CartContainer extends Component {

  showCartItem = (cart) =>{
    var {onDeleteProductInCart, onChangeMessage, onUpdateProductInCart} = this.props;
    var result = 
    <tr>
      <td>{Messages.MSG_CART_EMPTY}</td>
    </tr>;
    
    if(cart.length >0){
      result = cart.map((item, index) =>{
        return (
          <CartItem
          key = {index}
          item = {item}
          index = {index}
          onDeleteProductInCart = {onDeleteProductInCart}
          onChangeMessage = {onChangeMessage}
          onUpdateProductInCart ={onUpdateProductInCart}
          />
        )
      })
    }
    return result;
  }
  totalAmount = (cart) => {
    var result = null;
    if(cart.length > 0){
      result = <Total cart = {cart}/>
    }
    return result;
  }

  render() {
    var { cart } = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.totalAmount(cart)}
      </Cart>
    );
  }
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }).isRequired,
      quality: PropTypes.number.isRequired
    })).isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired,
    
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}
const mapDispatchToProps = (dispatch, props) =>{
  return{
    onDeleteProductInCart : (product) =>{
      dispatch(actDeleteProductInCart(product));
    },
    onChangeMessage : (message) =>{
      dispatch(actChangeMessage(message));
    },
    onUpdateProductInCart : (product,quality) =>{
      dispatch(actUpdateProductInCart(product, quality));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
