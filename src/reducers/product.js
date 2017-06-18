import * as ProductActionTypes from '../actiontypes/product';

const initialState = {
	products: [
    {
  		id: 0,
  		name: 'React JS book',
  	  price: 31,
  		created: '11/8/2016',
  		description: 'this is really good book'
  	},
  	{
  		id: 1,
  		name: 'Ios for dummy',
  		price: 20,
  		created: '11/9/2016',
  		description: 'The easy way to use your iPad or iPhone to make amazing music'
  	},
  	{
  		id: 2,
  		name: 'Android for beginner',
  		price: 50,
  		created: '11/11/2016',
  		description: 'The greatest book for learning android'
  	},
    {
      id: 3,
      name: 'Lay Death at Her Door',
      price: 12,
      created: '11/11/2016',
      description: 'wenty years ago, Kate’s false testimony sent an innocent man to prison for unthinkable acts. But as the past comes back to haunt her'
    },
    {
      id: 4,
      name: 'The Watcher',
      price: 23,
      created: '11/11/2016',
      description: 'A “first-rate thriller” (New York Times bestselling author Brenda Novak): In this suspenseful tale, forensic psychiatrist Kate Myers and deputy sheriff'
    }
  ]
}

let default_id = 5;

export default function Product(state=initialState, action) {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth()+1;
  let year = date.getFullYear();

  switch(action.type) {
    case ProductActionTypes.ADD_PRODUCT:
      const addProductList = [...state.products, {
          id: default_id,
          name: action.props.name,
          price: action.props.price,
          description: action.props.description,
          created: `${month}/${day}/${year}`
      }];
      default_id += 1;

      return {
        ...state, products: addProductList
      };
      
    case ProductActionTypes.REMOVE_PRODUCT:
      let index = state.products.findIndex((product) => product.id === action.id);

      const removeProductList = [
        ...state.products.slice(0, index),
        ...state.products.slice(index + 1)
      ];

      return {
        ...state, products: removeProductList
      };
      
    case ProductActionTypes.UPDATE_PRODUCT:
      const productList = state.products.map((product) => {
        if(product.id === action.id) {
          return {
            ...product,
            name: action.props.name,
						price: parseInt(action.props.price, 10),
						description: action.props.description,
          };
        }
        return product;
      });

      return {
        ...state, products: productList
      };
      
    default:
      return state;
  }
}