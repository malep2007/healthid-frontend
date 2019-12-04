import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Grid } from '@material-ui/core';
import PhoneInput from 'react-phone-input-labelled';
import 'react-phone-input-labelled/dist/style.css';
import CustomPhoneFieldStyles from '../../assets/styles/shared/customPhoneFieldStyles';


const CustomPhoneField = ({
  value, onChange, label, styles
}) => {
  const phoneStyles = _.isEmpty(styles) ? CustomPhoneFieldStyles : styles;
  const preferredCountries = ['ng', 'ug', 'gb', 'rw'];

  return (
    <Grid item container style={phoneStyles.gridContainer}>
      <PhoneInput
        value={value}
        placeholder=""
        preferredCountries={preferredCountries}
        label={label}
        defaultCountry="ng"
        onChange={onChange}
        containerStyle={phoneStyles.containerStyles}
        inputStyle={phoneStyles.inputStyles}
        labelStyle={phoneStyles.labelStyle}
        buttonStyle={phoneStyles.buttonStyles}
        dropdownStyle={phoneStyles.dropdownStyles}
        inputExtraProps={{
          margin: 'normal',
          required: true,
          name: 'phone'
        }}
      />
    </Grid>
  );
};

CustomPhoneField.propTypes = {
  styles: PropTypes.objectOf(Object),
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

CustomPhoneField.defaultProps = {
  styles: {},
  value: '',
  label: 'Phone #',
};

export default CustomPhoneField;
