import React from 'react';
import { mount } from 'enzyme';
import ProductCard from '../../../components/sell/productCard';

const props = {
  classes: {},
  product: {
    productName: 'Amoxycilin',
    quantityInStock: 3,
    productCategory: 'Anti-biotics',
    productPrice: 1000,
    dispensingSize: { name: '' }
  },
  currency: '₦',
  handleClickViewDetails: jest.fn(),
};
describe('test ProductCard component', () => {
  let wrapper;

  it('it renders ProductCard component', () => {
    wrapper = mount((
      <ProductCard {...props} />
    ));
    const card = wrapper.find('Card').length;
    expect(card).toBe(1);
  });
  it('it renders ProductCard component Icon', () => {
    wrapper = mount((
      <ProductCard {...props} />
    ));
    const iconButton = wrapper.find('IconButton');
    iconButton.simulate('click');
    expect(iconButton.length).toBe(1);
  });
});
