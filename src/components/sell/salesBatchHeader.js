/* eslint-disable no-empty-pattern */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Typography, IconButton
} from '@material-ui/core';
import ConfirmLogo from '../../assets/images/sellScreen/Confirm.png';
import CancelLogo from '../../assets/images/sellScreen/Cancel.png';
import { saleDetailsDialog as styles } from '../../assets/css/sellScreenStyles';

export const SaleBatchHeader = ({
  state: {
    currentProduct
  },
  handleSaleDialogClose,
  handleClickToAddProduct
}) => (
  <Fragment>
    <Grid container>
      <Grid item container xs={8} direction="column">
        <Typography variant="h5" style={styles.name}>{currentProduct.productName}</Typography>
        <Grid item container direction="row">
          <Typography variant="caption" style={styles.captionTextProdType}>{currentProduct.productCategory.name}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={4} direction="column" align="right">
        <IconButton
          aria-label="Edit"
          onClick={() => handleClickToAddProduct(currentProduct)}
          style={styles.icon}
        >
          <img src={ConfirmLogo} style={{ width: '20px' }} alt="" />
        </IconButton>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <IconButton
          aria-label="Edit"
          onClick={() => handleSaleDialogClose()}
          style={styles.icon}
        >
          <img src={CancelLogo} style={{ width: '20px' }} alt="" />
        </IconButton>
      </Grid>
    </Grid>
  </Fragment>
);

SaleBatchHeader.propTypes = {
  state: PropTypes.instanceOf(Object),
  handleSaleDialogClose: PropTypes.func.isRequired,
  handleClickToAddProduct: PropTypes.func.isRequired
};

SaleBatchHeader.defaultProps = {
  state: {},
};

export default SaleBatchHeader;
