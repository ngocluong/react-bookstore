import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../components/Header'
import createRouterContext from 'react-router-test-context'

function setup() {
  const context = createRouterContext()
  const enzymeWrapper = shallow(<Header />, { context })

  return {
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Header', () => {
      it('should render self and subcomponents with expected text', () => {
        const { enzymeWrapper } = setup()
        expect(enzymeWrapper.find({ to: '/' }).length).toEqual(1);
        expect(enzymeWrapper.find({ to: '/products/new' }).length).toEqual(1);
      })
  })
})