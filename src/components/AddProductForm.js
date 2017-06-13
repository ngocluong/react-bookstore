import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

export default class AddProductForm extends Component {
  static propTypes = {
    addNewBook: PropTypes.func.isRequired,
  };

  addBook = (e) => {
    if (e) e.preventDefault();
    this.props.addNewBook({
      name: this.name.value,
      price: this.price.value,
      description: this.description.value
    });

    this.props.history.push('/products');
  };

  render() {
    return (
      <div className="add-product-form">
        <form onSubmit={this.addBook}>
          <input
            type="text"
            placeholder="Name"
            ref={(input) => { this.name = input; }} />
          <input
            type="text"
            pattern="[0-9]"
            placeholder="Price"
            ref={(input) => { this.price = input; }} />
          <br />
          <textarea
            rows="4" 
            cols="60"
            type="text"
            className='textarea'
            placeholder="Description"
            ref={(input) => { this.description = input; }} />
          <hr/>
          <center>
            <input type="submit" value="Add Book" />
          </center>
        </form>
      </div>
    );
  }
}
