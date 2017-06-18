import * as ProductActionTypes from '../actiontypes/product';

export const addProduct = (props) => {
  return {
    type: ProductActionTypes.ADD_PRODUCT,
    props
  };
}

export const removeProduct = (id) => {
  return {
    type: ProductActionTypes.REMOVE_PRODUCT,
    id
  };
}

export const editProduct = (id, props) => {
  return {
    type: ProductActionTypes.UPDATE_PRODUCT,
    id,
    props
  };
}
