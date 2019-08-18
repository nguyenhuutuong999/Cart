import React, { Component } from 'react';
import * as Messages from '../constants/Messages'
class CartItem extends Component {

  render() {
      var {item} = this.props;
      var {quality} =  item;
      
    return (
        <tr>  
        <th scope="row">
            <img src= {item.product.image}
                alt="" className="img-fluid z-depth-0" />
        </th>
        <td>
            <h5>
                <strong>{item.product.name}</strong>
            </h5>
        </td>
        <td>{item.product.price}</td>
        <td className="center-on-small-only">
            <span className="qty">{quality} </span>
            <div className="btn-group radio-group" data-toggle="buttons">
                <label 
                onClick = {() =>{this.onUpdateQuality(item.product, item.quality-1)} } 
                className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light">
                    <a>—</a>
                </label>
                <label 
                onClick = {() =>{this.onUpdateQuality(item.product, item.quality+1)}}
                className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light">
                    <a>+</a>
                </label>
            </div>
        </td>
        <td>{this.SubTottal(item.product.price, item.quality)}$</td>
        <td>
            <button onClick = {() => {this.onDelete(item.product)}} type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                title="" data-original-title="Remove item">
                X
            </button>
        </td>
    </tr>
   
    );
  }

  onUpdateQuality = (product,quality) =>{
      var {onUpdateProductInCart, onChangeMessage} = this.props;
    if(quality > 0){
        onUpdateProductInCart(product, quality);
        onChangeMessage(Messages.MSG_UPDATE_CART_SUCCSEE);
    }
  }

  SubTottal = (price, quality) =>{
    return price*quality;     
  }
  onDelete = (product) =>{
    var {onDeleteProductInCart, onChangeMessage} = this.props;
    onDeleteProductInCart(product);
    onChangeMessage(Messages.MSG_DELETE_PRODUCT_SECCESS);
  }
}

export default CartItem;
