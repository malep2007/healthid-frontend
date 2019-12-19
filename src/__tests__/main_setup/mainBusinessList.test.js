/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import {
  Table,
  TableCell
} from '@material-ui/core';
import { MainBusiness } from '../../components/main_setup/mainBusinessList';

describe('Business List tests', () => {
  it('Should render a table with a business', () => {
    const data = {
        id: '1',
        legalName: 'Business 1',
        businessEmail: 'business1@mail.com'
      };
      
    const wrapper = shallow(<MainBusiness business={data} />);

    expect(wrapper.exists());
    expect(wrapper.find(TableCell).length).toEqual(3);
  });

  it('Should return null if a business is not provided', () => {
    const data={}
    const wrapper = shallow(<MainBusiness business={data} />);
    
    expect(wrapper.exists());
    expect(wrapper.find(Table).length).toEqual(0);
  });
});
