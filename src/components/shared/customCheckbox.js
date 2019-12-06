import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import checkboxstyles from '../../assets/styles/shared/customCheckboxStyles';

const CustomCheckbox = (props) => {
  const {
    classes, label, checked, handleChange
  } = props;
  return (
    <FormControlLabel
      control={(
        <Checkbox
          checked={checked}
          onChange={handleChange}
          className={classes.root}
          disableRipple
          color="default"
          checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
          icon={<span className={classes.icon} />}
          inputProps={{ 'aria-label': 'decorative checkbox' }}
          {...props}
        />
      )}
      label={label}
    />
  );
};

CustomCheckbox.propTypes = {
  checked: PropTypes.bool,
  handleChange: PropTypes.func,
  classes: PropTypes.instanceOf(Object),
  label: PropTypes.instanceOf(Object),
};

CustomCheckbox.defaultProps = {
  checked: false,
  handleChange: () => { },
  classes: {},
  label: {}
};

export default withStyles(checkboxstyles)(CustomCheckbox);
