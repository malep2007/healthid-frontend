import React from 'react';
import { shallow } from 'enzyme';
import CategoryModal from '../../components/main_setup/categoryModal';

describe("Category Modal", () => {
  const wrapper = shallow(
    <CategoryModal
      openModal={false}
      handleCloseModal={jest.fn()}
      handleChange={jest.fn()}
      handleDelete={jest.fn()}
      handleConfirmChange={jest.fn()}
      stateData={
        {
          name: "Test",
          salesMarkup: 10,
          isVat: true,
          loyalty: 10,
        }
      }
    />
  );

  it("Should render the component", () => {
    expect(wrapper.exists()).toBeTruthy()
  });

  it("should set anchorEl when 'handleClick' is called with provided element", () => {
    wrapper.find('WithStyles(IconButton)').at(1).simulate('click',
      { "currentTarget": { "value": 'Element' } }
    )
    expect(wrapper.find('Popper').props()['anchorEl'].value).toBe('Element')
  });

  it("should not set anchorEl when 'handleClick' is called without element", () => {
    wrapper.find('WithStyles(IconButton)').at(1).simulate('click',
      { "currentTarget": { "value": '' } }
    )
    expect(wrapper.find('Popper').props()['anchorEl']).toBeFalsy
  });

  it("should close Modal when 'handleCloseBoth' is called", () => {
    wrapper.find('WithStyles(Modal)').simulate('close')
    expect(wrapper.find('WithStyles(Modal)').exists()).toBeFalsy
  });

  it("should call 'handleDelete' prop when delete Button is clicked", () => {
    wrapper.find('WithStyles(Button)').at(0).simulate('click')
    expect(wrapper.props('handleDelete')).toHaveBeenCalled
  });
});
