import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import ProductUpdate from './ProductUpdate'
import {Route, NavLink} from 'react-router-dom';

class ProductDetail extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  };

  render() {
    const { product } = this.props;
    return (
      <div className="main-content">
        <h2>{product.name}</h2>
        <ul>
          <li>
            <span>Price: </span> 
            { product.price }
          </li>
          <li>
            <span>Description: </span> 
            { product.description }
          </li>
          <li>
            <span>Created: </span> 
            { product.created }
          </li> 
          <li>
            <hr/>
            <NavLink to={`${this.props.match.url}/edit`}>Edit Book</NavLink>
          </li>        
        </ul>
        <Route path={`${this.props.match.path}/edit`} component={ProductUpdate}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => (
  {
    product: state.products[ownProps.match.params.id]
  }
);

export default connect(mapStateToProps)(ProductDetail);