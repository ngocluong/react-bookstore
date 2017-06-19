import React from 'react'
import NotFound from '../../components/NotFound'
import { mount } from 'enzyme'

function setup() {
  const enzymeWrapper = mount(<NotFound />)
  return {
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Header', () => {
      it('should render self and subcomponents with expected text', () => {
        const { enzymeWrapper } = setup()
        expect(enzymeWrapper.find('h2').text()).toBe('Page Not Found')
      })
  })
})