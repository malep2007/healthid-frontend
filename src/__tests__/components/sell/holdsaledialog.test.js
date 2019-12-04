import React from 'react';
import { mount } from 'enzyme';
import HoldSaleDialog from '../../../components/sell/holdSaleDialog';

const props = {
  state: {
    openHoldSaleDialog: false,
    mainCartNote: '',
    isLoading: false,
  },
  handleCartNoteDialogClose: jest.fn(),
  handleHoldNoteInPutChange: jest.fn(),
  handleAddHeldSaleButton: jest.fn(),
};
describe('test HoldSaleDialog component', () => {
  const wrapper = mount((
    <HoldSaleDialog {...props} />
  ));
  it('it renders HoldSaleDialog component', () => {
    const dialog = wrapper.find('Dialog').length;
    expect(dialog).toBe(1);
  });
  it('it renders Loader when fetching', () => {
    wrapper.setProps({ state: { isLoading: true } })
    const dialog = wrapper.find('Dialog').length;
    expect(dialog).toBe(1);
  });
});
