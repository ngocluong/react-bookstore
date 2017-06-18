import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import ProductForm from '../components/ProductForm';
import { bindActionCreators } from 'redux';
import * as ProductActionCreators from '../actions/product';

class ProductUpdate extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  };

  render() {
    const { product, dispatch } = this.props;
    const editProduct = bindActionCreators(ProductActionCreators.editProduct, dispatch);

    return (
      <div className="main-content">
        <h2>Update Book</h2>
        <ProductForm 
          editProduct = {editProduct}
          newEntry={false}
          index = {parseInt(this.props.match.params.id, 10)}
          name = {product.name}
          price = {product.price}
          history = {this.props.history}
          description = {product.description} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => (
  {
    product: state.products[ownProps.match.params.id]
  }
);

export default connect(mapStateToProps)(ProductUpdate);
