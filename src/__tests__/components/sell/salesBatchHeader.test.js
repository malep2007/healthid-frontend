import React from 'react';
import { shallow } from 'enzyme';
import { SaleBatchHeader } from '../../../components/sell/salesBatchHeader';

describe('SaleBatchHeader', () => {
  const props = {
    state: { 
        currentProduct: {
            productName: 'Aboniki',
            productCategory: 'Beauty'
        } 
    },
    handleSaleDialogClose: jest.fn(),
    handleClickToAddProduct: jest.fn()
  };
  const wrapper = shallow(<SaleBatchHeader {...props} />)

  it('renders all grids', () => {
    expect(wrapper.find('WithStyles(Grid)').length).toBe(4);
  });

  it('handles close IconButton onClick', () => {
    wrapper.find('WithStyles(IconButton)').at(1).simulate('click')
    expect(props.handleSaleDialogClose).toHaveBeenCalled();
  })

  it('handles add IconButton onClick', () => {
    wrapper.find('WithStyles(IconButton)').at(0).simulate('click')
    expect(props.handleClickToAddProduct).toHaveBeenCalled();
  })
});
