import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProductActionCreators from '../actions/product';
import ProductForm from '../components/ProductForm';

class NewProduct extends Component {
  render() {
    const { dispatch } = this.props;
    const addProduct = bindActionCreators(ProductActionCreators.addProduct, dispatch);

    return (
			<div className="main-content home">
        <h2>Add New Product</h2>
      	<ProductForm 
          addNewBook={addProduct}
          newEntry={true}
          name = ""
          price = ""
          description = "" 
          history = {this.props.history} />
      </div>
    );
  }
}

export default connect(null)(NewProduct);
