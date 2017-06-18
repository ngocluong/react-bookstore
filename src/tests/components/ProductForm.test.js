import React from 'react'
import { mount } from 'enzyme'
import ProductForm from '../../components/ProductForm'

describe('components', () => {
  describe('ProductForm', () => {
    describe('creating form', () => {
      function setup() {
        const props = {
          addProduct: jest.fn(),
          newEntry: true,
          name: '',
          price: 0,
          description: '',
          history: ['/logs/all/all/date_desc/1']
        }

        const enzymeWrapper = mount(<ProductForm {...props} />)

        return {
          props,
          enzymeWrapper
        }
      }

      it('should render self and subcomponents with expected text', () => {
        const { enzymeWrapper } = setup()
        const submitBtn = enzymeWrapper.find('#submitForm').props()
        expect(submitBtn.value).toEqual('Create Book')
      })

      it('should call addProduct when submit with new entry', () => {
        const { enzymeWrapper, props } = setup()
        const form = enzymeWrapper.find('form').first();
        expect(props.addProduct.mock.calls.length).toBe(0)
        form.simulate('submit');
        expect(props.addProduct.mock.calls.length).toBe(1)
      })
    })

    describe('updating form', () => {
      function setup() {
        const props = {
          editProduct: jest.fn(),
          newEntry: false,
          name: 'new name',
          price: 2,
          description: 'description',
          history: ['/logs/all/all/date_desc/1']
        }

        const enzymeWrapper = mount(<ProductForm {...props} />)

        return {
          props,
          enzymeWrapper
        }
      }

      it('should render self and subcomponents with expected text', () => {
        const { enzymeWrapper } = setup()
        const submitBtn = enzymeWrapper.find('#submitForm').props()
        expect(submitBtn.value).toEqual('Update Book')
      })

      it('should call update Product when submit with ', () => {
        const { enzymeWrapper, props } = setup()
        const form = enzymeWrapper.find('form').first();
        expect(props.editProduct.mock.calls.length).toBe(0)
        form.simulate('submit');
        expect(props.editProduct.mock.calls.length).toBe(1)
      })
    })  
  })
})