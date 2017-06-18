import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import NotFound from '../components/NotFound'
import _ from 'lodash';

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
    product: _.find(state.products, { id: parseInt(ownProps.match.params.id, 10) })
  }
);

export default connect(mapStateToProps)(ProductDetail);
