import React from 'react'
import { shallow } from 'enzyme'
import ProductUpdate from '../../containers/ProductUpdate'
import ProductReducer from '../../reducers/product';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import createRouterContext from 'react-router-test-context'

describe('components', () => {
  describe('ProductUpdate', () => {
    function setup() {
      const props = {
        match: { params: {id: 1}, url: 'products/1' }
      }

      const context = createRouterContext()
      const store = createStore(
        ProductReducer,
        window.devToolsExtension && window.devToolsExtension()
      );
      const enzymeWrapper = shallow( <ProductUpdate {...props} store={store}/>, { context });
      return {
        enzymeWrapper
      }
    }

    it('should render product with expected text', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.dive().find('h2').text()).toEqual('Update Book');
      const ProductFormProps = enzymeWrapper.dive().find('ProductForm').props()
      expect(ProductFormProps.newEntry).toBe(false)
      expect(ProductFormProps.name).toBe('Ios for dummy')
      expect(ProductFormProps.price).toBe(20)
      expect(ProductFormProps.description).toBe("The easy way to use your iPad or iPhone to make amazing music")
    })
  })
})