import React from 'react'
import { mount } from 'enzyme'
import NewProduct from '../../containers/NewProduct'
import ProductReducer from '../../reducers/product';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

describe('components', () => {
  describe('NewProduct', () => {
    function setup() {
      const store = createStore(
        ProductReducer,
        window.devToolsExtension && window.devToolsExtension()
      );
      const enzymeWrapper = mount(
        <Provider store={store}>
          <NewProduct />
        </Provider>
      );
      return {
        enzymeWrapper
      }
    }

    it('should render product form', () => {
      const { enzymeWrapper } = setup()

      const ProductFormProps = enzymeWrapper.find('ProductForm').props()
      expect(ProductFormProps.newEntry).toBe(true)
      expect(ProductFormProps.name).toBe('')
      expect(ProductFormProps.price).toBe(0)
      expect(ProductFormProps.description).toBe('')
    })
  })
})