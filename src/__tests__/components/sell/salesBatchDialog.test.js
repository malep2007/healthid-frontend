import React from 'react';
import { mount } from 'enzyme';
import { SaleDetailDialog } from '../../../components/sell/salesBatchDialog';

describe('SaleDetailDialog', () => {
  const props = {
    state: {
      openSaleDetailsDialog: true,
      currentProduct: {
        productName: 'Aboniki',
        productCategory: 'Beauty',
        batchInfo: []
    } 
    },
    handleSaleDialogClose: jest.fn(),
    handleClickToAddProduct: jest.fn(),
    handleSelectedCheckBox: jest.fn(),
    handleBatchInputChange: jest.fn(),
    renderQuantity: jest.fn(),
    isBatchSelected: jest.fn(),
    handleBatchQuantityButtons: jest.fn(),
    renderBatchQuantity: jest.fn()
  }
  const wrapper = mount(<SaleDetailDialog {...props} />)

  it('renders Dialog', () => {
    expect(wrapper.find('Dialog').length).toBe(1);
  });

  it('renders "SaleBatchHeader"', () => {
    const header = wrapper.find('SaleBatchHeader')
    expect(header.length).toBe(1);
  })

  it('renders "SaleBatchList"', () => {
    const paper = wrapper.find('SaleBatchList')
    expect(paper.length).toBe(1);
  })
});
