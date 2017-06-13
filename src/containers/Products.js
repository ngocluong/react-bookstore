import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as ProductActionCreators from '../actions/product';

class Products extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired
  };

  render() {
    const { dispatch, products } = this.props;
    const removeProduct = bindActionCreators(ProductActionCreators.removeProduct, dispatch);

    const productComponents = products.map((product, index) => (
      <li key={index}>
        <div className="product-name">
          <a className='remove-product' onClick={() => removeProduct(index)}>
            ✖
          </a>
          <NavLink exact to={`/products/${index}`}>{product.name}</NavLink>
        </div>
      </li>
    ));

    return (
      <div className="main-content">
        <div className="products">
          <h2>Product List</h2>
          <ul className="product-nav">
            { productComponents }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    products: state.products,
  }
);

export default connect(mapStateToProps)(Products);
