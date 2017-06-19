import React from 'react'
import { mount } from 'enzyme'
import App from '../../containers/App'
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
   
  const enzymeWrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>, { context }
  );

  return {
    enzymeWrapper
  }
}

describe('components', () => {
  describe('App', () => {
    it('should render products with products path', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('h2').text()).toBe('Product List')
      expect(enzymeWrapper.find('.products').exists()).toBe(true)
    })
  })
})
