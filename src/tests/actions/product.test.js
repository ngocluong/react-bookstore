import * as actions from '../../actions/product'
import * as ProductActionTypes from '../../actiontypes/product';

describe('product actions', () => {
  it('should create an action to add a product', () => {
    const props = {
    	name: 'new name',
    	price: 1,
    	description: 'book description'
    }
    const expectedAction = {
      type: ProductActionTypes.ADD_PRODUCT,
      props
    }
    expect(actions.addProduct(props)).toEqual(expectedAction)
  })

  it('should create an action to remove a product', () => {
    const id = 1
    const expectedAction = {
      type: ProductActionTypes.REMOVE_PRODUCT,
      id
    }
    expect(actions.removeProduct(id)).toEqual(expectedAction)
  })

  it('should create an action to edit a product', () => {
    const id = 1
    const props = {
    	name: 'edited name',
    	price: 4,
    	description: 'book description edited'
    }
    const expectedAction = {
      type: ProductActionTypes.UPDATE_PRODUCT,
      id,
      props
    }
    expect(actions.editProduct(id, props)).toEqual(expectedAction)
  })
})