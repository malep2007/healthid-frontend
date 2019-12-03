import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog, DialogContent, DialogTitle, Slide,
} from '@material-ui/core';
import { saleDetailsDialog as styles } from '../../assets/css/sellScreenStyles';
import SaleBatchList from './salesBatchList';
import SaleBatchHeader from './salesBatchHeader';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export const SaleDetailDialog = ({
  state,
  handleSaleDialogClose,
  handleClickToAddProduct,
  handleSelectedCheckBox,
  handleBatchInputChange,
  renderQuantity,
  isBatchSelected,
  handleBatchQuantityButtons,
  renderBatchQuantity
}) => {
  const { openSaleDetailsDialog } = state;
  return (
    <Dialog
      open={openSaleDetailsDialog}
      onClose={handleSaleDialogClose}
      maxWidth="sm"
      style={{ backgroundColor: 'rgba(100, 100, 100, 0.4)' }}
      fullWidth
      TransitionComponent={Transition}
      aria-labelledby="sale-details-dialog"
      id="sale-details-dialog"
      BackdropProps={{
        invisible: true
      }}
    >
      <DialogTitle
        id="alert-dialog-slide-title"
        style={styles.dialogTitle}
      >
        <SaleBatchHeader
          state={state}
          handleSaleDialogClose={handleSaleDialogClose}
          handleClickToAddProduct={handleClickToAddProduct}
        />
      </DialogTitle>
      <DialogContent style={styles.dialogContent}>
        <SaleBatchList
          state={state}
          renderQuantity={renderQuantity}
          handleSelectedCheckBox={handleSelectedCheckBox}
          handleBatchInputChange={handleBatchInputChange}
          handleBatchQuantityButtons={handleBatchQuantityButtons}
          isBatchSelected={isBatchSelected}
          renderBatchQuantity={renderBatchQuantity}
        />
      </DialogContent>
    </Dialog>
  );
};

SaleDetailDialog.propTypes = {
  state: PropTypes.instanceOf(Object),
  handleSaleDialogClose: PropTypes.func.isRequired,
  handleClickToAddProduct: PropTypes.func.isRequired,
  handleSelectedCheckBox: PropTypes.func.isRequired,
  handleBatchInputChange: PropTypes.func.isRequired,
  renderQuantity: PropTypes.func.isRequired,
  isBatchSelected: PropTypes.func.isRequired,
  handleBatchQuantityButtons: PropTypes.func.isRequired,
  renderBatchQuantity: PropTypes.func.isRequired
};

SaleDetailDialog.defaultProps = {
  state: {}
};

export default SaleDetailDialog;
