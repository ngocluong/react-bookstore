import React from 'react'
import { shallow } from 'enzyme'
import Products from '../../containers/Products'
import ProductReducer from '../../reducers/product';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import createRouterContext from 'react-router-test-context'

function setup() {
  const context = createRouterContext()

  const store = createStore(
    ProductReducer,
    window.devToolsExtension && window.devToolsExtension()
  );
   
  const enzymeWrapper = shallow( <Products store={store}/>, { context });

  return {
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Products', () => {
    it('should render products with products path', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.dive().find('h2').text()).toEqual('Product List');
      expect(enzymeWrapper.dive().find('.products').exists()).toBe(true);;
      expect(enzymeWrapper.dive().find('li').length).toBe(5);
      expect(enzymeWrapper.dive().find('.remove-product').length).toBe(5);
      expect(enzymeWrapper.dive().find('.edit-product').length).toBe(5);
    })
  })
})
