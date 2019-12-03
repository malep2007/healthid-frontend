import React from 'react';
import { shallow } from 'enzyme';
import { SaleBatchList } from '../../../components/sell/salesBatchList';

describe('SaleBatchList', () => {
  const props = {
    state: { 
        currentProduct: {
            productName: 'Aboniki',
            productCategory: 'Beauty',
            batchInfo: [
                {
                        batchNo: '77488743',
                        expiryDate: '2019-4-12',
                        batchQuantities: [
                            { quantityRemaining: 2 }
                        ],
                }
            ]
        },
        selectedProductBatches: [] 
    },
    handleSelectedCheckBox: jest.fn(),
    handleBatchInputChange: jest.fn(),
    isBatchSelected: jest.fn()
  };
  const wrapper = shallow(<SaleBatchList {...props} />)

  it('handles checkbox selection', () => {
    wrapper.find('WithStyles(Checkbox)').simulate('click')
    expect(props.handleSelectedCheckBox).toHaveBeenCalled();
  })
});
