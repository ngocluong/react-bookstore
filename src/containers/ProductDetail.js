import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import NotFound from '../components/NotFound'

class ProductDetail extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  };

  render() {
    const { product } = this.props;
    if (!product) return <NotFound />;
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
