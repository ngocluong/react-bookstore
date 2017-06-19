import React from 'react'
import { shallow } from 'enzyme'
import ProductDetail from '../../containers/ProductDetail'
import ProductReducer from '../../reducers/product';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import createRouterContext from 'react-router-test-context'

describe('components', () => {
  describe('ProductDetail', () => {
    function setup() {
      const props = {
        match: { params: {id: 1}, url: 'products/1' }
      }

      const context = createRouterContext()
      const store = createStore(
        ProductReducer,
        window.devToolsExtension && window.devToolsExtension()
      );
      const enzymeWrapper = shallow( <ProductDetail {...props} store={store}/>, { context });
      return {
        enzymeWrapper
      }
    }

    it('should render product with expected text', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.dive().find('h2').text()).toEqual('Ios for dummy');
      expect(enzymeWrapper.dive().find({ to: 'products/1/edit' }).length).toEqual(1);
    })
  })
})