import React from 'react';
import { shallow } from 'enzyme';
import ReturnQuantity from '../../../components/sell/returnQuantity';

const props = {
  item: { quantity: 1 },
  handleQuantityButtons: jest.fn(),
  handleQuantityOnChange: jest.fn(),
  classes: {
    paperInput: '', paperIcon: '', iconsGrid: '', icon: ''
  },
};
describe('test ReturnQuantity component', () => {
  let wrapper;
  it('it renders ReturnQuantity component', () => {
    wrapper = shallow((
      <ReturnQuantity {...props} />
    ));
    const paper = wrapper.find('Paper').length;
  });
});
