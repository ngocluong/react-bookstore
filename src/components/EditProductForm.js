import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

export default class EditProductForm extends Component {
  static propTypes = {
    editProduct: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      price: props.price,
      description: props.description,
    };
  }

  onPriceChange = (e) => {
    const price = e.target.value;
    this.setState({ ...this.state, price: price });
  };

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState({ name: name });
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState({ description: description });
  };

  editBook = (e) => {
    if (e) e.preventDefault();
    this.props.editProduct(
      this.props.index,
      {
        name: this.state.name,
        price: this.state.price,
        description: this.state.description
      }
    );
    this.props.history.push(`products/${this.props.index}`);
  };

  render() {
    return (
      <div className="add-product-form">
        <form onSubmit={this.editBook}>
          <input
            required
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.onNameChange} />
          <input
            required
            type="text"
            pattern="^(0|[1-9][0-9]*)$"
            placeholder="Price"
            value={this.state.price}
            onChange={this.onPriceChange} />
          <br />
          <textarea
            required
            rows="4" 
            cols="54"
            type="text"
            placeholder="Description"
            className='textarea'
            value={this.state.description}
            onChange={this.onDescriptionChange} />
          <hr/>
          <center>
            <input type="submit" value="Update Book" />
          </center>
        </form>
      </div>
    );
  }
}
