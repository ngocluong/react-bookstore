import reducer from '../../reducers/product'
import * as ProductActionTypes from '../../actiontypes/product';
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
let date = new Date();
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

describe('product reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle add product', () => {
    const props = {
      name: 'new name',
      price: 1,
      description: 'book description'
    };
    const expectedprops = {
      id: default_id,
      name: 'new name',
      price: 1,
      description: 'book description',
      created: `${month}/${day}/${year}`
    };
    const expectedProductList = [...initialState.products, expectedprops];

    expect(
      reducer(initialState, {
        type: ProductActionTypes.ADD_PRODUCT,
        props
      })
    ).toEqual({...initialState, products: expectedProductList})

    expect(
      reducer({products: []}, {
        type: ProductActionTypes.ADD_PRODUCT,
        props
      })
    ).toEqual({...initialState, products: [{...expectedprops, id: default_id +=1}]})
  })

  it('should handle remove product', () => {
    const expectedRemoveProductList = [
      ...initialState.products.slice(0, 3),
      ...initialState.products.slice(3 + 1)
    ];
    const id = 3
  
    expect(
      reducer(initialState, {
        type: ProductActionTypes.REMOVE_PRODUCT,
        id
      })
    ).toEqual({...initialState, products: expectedRemoveProductList})
  })

  it('should handle update product', () => {
    const id = 3
    const props = {
      name: 'updated name',
      price: 21,
      description: 'book description edited'
    };
  
    const expectedUpdatedProductList = [
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
        name: 'updated name',
        price: 21,
        created: '11/11/2016',
        description: 'book description edited'
      },
      {
        id: 4,
        name: 'The Watcher',
        price: 23,
        created: '11/11/2016',
        description: 'A “first-rate thriller” (New York Times bestselling author Brenda Novak): In this suspenseful tale, forensic psychiatrist Kate Myers and deputy sheriff'
      }
    ];
    expect(
      reducer(initialState, {
        type: ProductActionTypes.UPDATE_PRODUCT,
        id,
        props
      })
    ).toEqual({...initialState, products: expectedUpdatedProductList})
  })
})