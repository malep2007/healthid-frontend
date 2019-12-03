import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Paper } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import NumericInput from 'react-numeric-input';
import { saleDetailsDialog as styles } from '../../assets/css/sellScreenStyles';

export const SaleBatchList = ({
  state: {
    currentProduct,
    selectedProductBatches
  },
  handleSelectedCheckBox,
  handleBatchInputChange,
  isBatchSelected,
}) => currentProduct.batchInfo.map(batch => batch.batchQuantities.length > 0
  && batch.batchQuantities[0].quantityRemaining > 0
  && (
    <Fragment>
      <Paper elevation={0} square style={styles.saleBatchListPaper}>
        <Grid container xs={12} justify="space-between">
          <Grid item xs={2.4} direction="column">
            <Checkbox
              color="primary"
              value="checkedG"
              style={styles.MuiIconButtonCheck}
              onClick={() => handleSelectedCheckBox(batch, currentProduct)}
            />
          </Grid>
          <Grid item xs={2.4} direction="column" style={styles.BatchNum}>
            <Typography variant="caption" style={styles.captionText}>
            Batch #
            </Typography>
            <Typography variant="subtitle2" style={styles.saleBatchListPaperColor}>
              {batch.batchNo && batch.batchNo.slice(0, 14)}
            </Typography>
          </Grid>
          <Grid item xs={2.4} direction="column">
            <Typography variant="caption" style={styles.captionText}>
            Expiry Date
            </Typography>
            <Typography variant="subtitle2" style={styles.saleBatchListPaperColor}>
              {batch.expiryDate}
            </Typography>
          </Grid>
          <Grid item xs={2.4} direction="column" style={styles.leftQuantity}>
            <Typography variant="caption" style={styles.captionText}>
            Quantity left
            </Typography>
            <Typography variant="subtitle2" style={styles.saleBatchListPaperQtyLeft}>
              {batch.batchQuantities.map(qty => qty.quantityRemaining)}
            </Typography>
          </Grid>
          { selectedProductBatches.length > 0 && (
            <Grid item xs={2.4} direction="column" style={styles.requiredQuantity}>
              {isBatchSelected(batch) ? (
                <>
                  <Typography variant="caption" style={styles.captionText}>
                    Quantity required
                  </Typography>
                  <Typography variant="subtitle2" style={styles.saleBatchListPaperInput}>
                    <NumericInput
                      className="form-control"
                      onChange={e => handleBatchInputChange(e, batch)}
                      valueAsNumber={1}
                      min={0}
                      max={99}
                      step={1}
                      size={3}
                    />
                  </Typography>
                </>
              ) : <div style={{ marginLeft: '100px' }}><span /></div>}
            </Grid>
          )
          }
        </Grid>
      </Paper>
    </Fragment>
  ));

SaleBatchList.propTypes = {
  state: PropTypes.instanceOf(Object),
  handleSelectedCheckBox: PropTypes.func.isRequired,
  handleBatchInputChange: PropTypes.func.isRequired,
  isBatchSelected: PropTypes.func.isRequired
};

SaleBatchList.defaultProps = {
  state: {},
};

export default SaleBatchList;
