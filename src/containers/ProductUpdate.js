import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import ProductForm from '../components/ProductForm';
import { bindActionCreators } from 'redux';
import * as ProductActionCreators from '../actions/product';
import NotFound from '../components/NotFound'
import _ from 'lodash';

class ProductUpdate extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  };

  render() {
    const { product, dispatch } = this.props;
    const editProduct = bindActionCreators(ProductActionCreators.editProduct, dispatch);

    if (!product) return <NotFound />;
    return (
      <div className="main-content">
        <h2>Update Book</h2>
        <ProductForm 
          editProduct = {editProduct}
          newEntry={false}
          id = {parseInt(this.props.match.params.id, 10)}
          name = {product.name}
          price = {parseInt(product.price, 10)}
          history = {this.props.history}
          description = {product.description} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => (
  {
    product: _.find(state.products, { id: parseInt(ownProps.match.params.id, 10) })
  }
);

export default connect(mapStateToProps)(ProductUpdate);
