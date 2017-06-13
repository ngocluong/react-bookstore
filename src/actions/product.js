import * as ProductActionTypes from '../actiontypes/product';

export const addProduct = (props) => {
  return {
    type: ProductActionTypes.ADD_PRODUCT,
    props
  };
}

export const removeProduct = (index) => {
  return {
    type: ProductActionTypes.REMOVE_PRODUCT,
    index
  };
}

export const editProduct = (index, props) => {
  return {
    type: ProductActionTypes.UPDATE_PRODUCT,
    index,
    props
  };
}
