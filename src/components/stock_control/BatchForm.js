import React from 'react';
import PropTypes from 'prop-types';
import {
  Paper, Grid, TextField, MenuItem, Divider, Typography,
} from '@material-ui/core';
import ServiceQuality from './returnServiceQuality';
import SearchField from './searchField';
import { stockFormStyles } from '../../assets/styles/stock/addStockStyles';

const BatchForm = ({
  state, handleChange, displaySelected, popperClickAway, handleServiceButtons
}) => {
  const {
    productName, dateReceived, batchNumber, supplier, expiryDate, costPerItem,
    quantityReceived, deliveryPromptness, notes, searching, active, errorText
  } = state;

  const options = [
    { label: 'On time', value: true },
    { label: 'Late', value: false }
  ];

  return (
    <Paper>
      <Grid container item>
        <Typography variant="h5" style={stockFormStyles.batchHeader}>
          Add Individual Product Batch
        </Typography>
      </Grid>
      <Divider style={stockFormStyles.batchDivider} />
      <Grid container style={stockFormStyles.gridContainer}>
        <Grid item xs={4} style={stockFormStyles.gridWrappers}>
          <SearchField
            state={state}
            value={productName}
            label="Product Name"
            name="productName"
            placeholder="Search product..."
            errorText={errorText}
            searching={searching}
            active={active}
            handleChange={handleChange}
            displaySelected={displaySelected}
            popperClickAway={popperClickAway}
            styles={stockFormStyles}
          />
        </Grid>
        <Grid item xs={4} style={stockFormStyles.gridWrappers}>
          <TextField
            label="Date Received"
            type="date"
            fullWidth
            name="dateReceived"
            value={dateReceived}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={4} style={stockFormStyles.gridWrappers}>
          <TextField
            label="Batch #"
            fullWidth
            name="batchNumber"
            value={batchNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4} style={stockFormStyles.gridWrappers}>
          <SearchField
            state={state}
            value={supplier}
            label="Supplier"
            name="supplier"
            placeholder="Search supplier..."
            errorText={errorText}
            searching={searching}
            active={active}
            handleChange={handleChange}
            displaySelected={displaySelected}
            popperClickAway={popperClickAway}
            styles={stockFormStyles}
          />
        </Grid>
        <Grid item xs={4} style={stockFormStyles.gridWrappers}>
          <TextField
            label="Expiry Date"
            type="date"
            fullWidth
            name="expiryDate"
            value={expiryDate}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={4} style={stockFormStyles.gridWrappers}>
          <TextField
            label="Cost Per Item"
            type="number"
            fullWidth
            name="costPerItem"
            value={costPerItem}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4} style={stockFormStyles.gridWrappers}>
          <TextField
            label="Quantity Received"
            type="number"
            fullWidth
            name="quantityReceived"
            value={quantityReceived}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4} style={stockFormStyles.gridWrappers}>
          <TextField
            label="Delivery Promptness"
            fullWidth
            select
            name="deliveryPromptness"
            value={deliveryPromptness}
            onChange={handleChange}
          >
            {options.map(option => (
              <MenuItem key={option.value} value={option.value} dense>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <ServiceQuality
        styles={stockFormStyles}
        handleServiceButtons={handleServiceButtons}
      />
      <Grid container spacing={32} style={stockFormStyles.gridContainer}>
        <Grid item xs={12} style={stockFormStyles.notesWrapper}>
          <Typography variant="subtitle1">Notes</Typography>
          <TextField
            fullWidth
            name="notes"
            variant="outlined"
            multiline
            rows="3"
            value={notes}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

BatchForm.propTypes = {
  state: PropTypes.objectOf(Object),
};

BatchForm.defaultProps = {
  state: {},
};

export default BatchForm;
