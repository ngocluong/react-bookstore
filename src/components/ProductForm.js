import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

export default class ProductForm extends Component {
  static propTypes = {
    editProduct: PropTypes.func,
    addProduct: PropTypes.func,
    newEntry: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number
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

  submitChange = (e) => {
    if (e) e.preventDefault();
    if(this.props.newEntry === true) {
      this.props.addProduct({
        name: this.state.name,
        price: this.state.price,
        description: this.state.description
      });
    } else {
      this.props.editProduct(
        this.props.id,
        {
          name: this.state.name,
          price: this.state.price,
          description: this.state.description
        }
      );  
    }

    this.props.history.push('/products');
  };

  render() {
    return (
      <div className="add-product-form">
        <form onSubmit={this.submitChange}>
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
            <input id='submitForm' type="submit" value={ this.props.newEntry === true ? "Create Book" : "Update Book" } />
          </center>
        </form>
      </div>
    );
  }
}
