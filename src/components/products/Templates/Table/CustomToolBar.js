import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  Tooltip, IconButton, MenuList, MenuItem, Grow,
} from '@material-ui/core';
import { savePDF } from '@progress/kendo-react-pdf';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {
  Export
} from '../../../../assets/images/stock/StockIcons';
import SavePrintPopper from '../../../sell/salesHistory/savePrintPopper';
import { ToolbarStyles } from '../../../../assets/styles/stock/stock';
import { supplyStyles } from '../../../../assets/styles/suppliers/suppliers';
import addlogo from '../../../../assets/images/products/add.png';
import searchlogo from '../../../../assets/images/products/search.png';
import expirieslogo from '../../../../assets/images/products/expiries.png';
import columnslogo from '../../../../assets/images/products/columns.png';
import statuslogo from '../../../../assets/images/products/status.png';
import TableSearch from '../../../stock_control/Table/TableSearch';
import { CustomIconButton, RenderPopper } from '../../../stock_control/utils/utils';


export class CustomToolBar extends Component {
  state = {
    open: false,
    addProductOpen: false,
    openViewColumnMenu: false,
    openViewMenu: false,
    openColumnMenu: false,
    addSupplierOpen: false,
    savePrintOpen: false,

  };


  handleToggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  handleToggleAddProduct = () => {
    const { addProductOpen } = this.state;
    this.setState({ addProductOpen: !addProductOpen });
  };

  handleCloseAddProduct = (event) => {
    !this.addProductElement.contains(event.target) && this.setState({ addProductOpen: false });
  };

 handleToggleViewColumnMenu = () => {
   const { openViewColumnMenu } = this.state;
   this.setState({ openViewColumnMenu: !openViewColumnMenu });
 };

 handleClosing = () => {
   this.setState({ openColumnMenu: false, openViewColumnMenu: false });
 };

  handleToggleViewMenu = () => {
    const { openViewMenu } = this.state;
    this.setState({ openViewMenu: !openViewMenu });
  };

  handleViewExportMenu = () => {
    const { openViewExportMenu } = this.state;
    this.setState({ openViewExportMenu: !openViewExportMenu });
  };

  handleClose = () => {
    this.setState({ openAddMenu: false, openViewMenu: false, openViewExportMenu: false });
  };

  handleChangeView = (status) => {
    const { handleViewProposed } = this.props;
    handleViewProposed(status);
  };

  handleSavePrintOpen = (event) => {
    const { currentTarget } = event;
    this.setState(state => ({
      savePrintOpen: !state.savePrintOpen,
      savePrintAnchorEl: currentTarget
    }));
  };

  handlePrintButton = () => {
    this.setState(state => ({
      savePrintOpen: !state.savePrintOpen,
    }));
  }

  handleSaveButton = (html) => {
    savePDF(html, {
      scale: 0.6,
      paperSize: 'A3',
      repeatHeaders: true,
      landscape: true,
      fileName: 'healthID_Products.pdf',
      margin: 10,
      top: 10
    });
    this.handlePrintButton();
  }

  isColumnHidden = (columnName = '') => {
    const { hiddenColumns } = this.props;
    return (hiddenColumns || []).includes(columnName.toLowerCase());
  };

  render() {
    const {
      openViewMenu, addProductOpen, openViewColumnMenu,
    } = this.state;
    const {
      title,
      classes,
      componentRef,
      handleClickSearch,
      isSearchActive,
      handleHideSearch,
      handleSearchTextChange,
      currentPath,
      handleChangeColumn,

    } = this.props;
    const active = currentPath.slice(10);

    return (
      <Fragment>
        {isSearchActive ? (
          <TableSearch onHide={handleHideSearch} handleTextChange={handleSearchTextChange} />
        ) : ('')}
        <Fragment>
          <Tooltip title="Search">
            <IconButton
              className={!isSearchActive ? classes.iconButtonActive : classes.iconButton}
              buttonRef={(node) => {
                this.anchorEl = node;
              }}
              toolTip="Search"
              aria-owns={openViewMenu ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleClickSearch}
            >
              <img src={searchlogo} style={{ width: '20px' }} alt="" />
            </IconButton>
          </Tooltip>
          <CustomIconButton
            toolTip="Add Product"
            buttonRef={(node) => {
              this.addProductElement = node;
            }}
            onClickHandler={() => this.handleToggleAddProduct()}

          >
            <img src={addlogo} style={{ width: '20px' }} alt="" />
          </CustomIconButton>
          <Tooltip title="Switch table view" style={{ marginLeft: '25px' }}>
            <IconButton
              className={!openViewMenu ? classes.iconButtonActive : classes.iconButton}
              buttonRef={(node) => {
                this.anchorEl = node;
              }}
              aria-owns={openViewMenu ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={this.handleToggleViewMenu}
            >
              <img src={statuslogo} style={{ width: '24px' }} alt="" />
            </IconButton>
          </Tooltip>
          <Popper
            className={classes.popper}
            style={{ padding: '10px', marginRight: '120px' }}
            open={openViewMenu}
            anchorEl={this.anchorEl}
            transition
            disablePortal
          >
            <Grow
              in={openViewMenu}
              id="menu-list-grow"
              style={{ transformOrigin: 'centre bottom' }}
            >
              <Paper className={classes.paper}>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <FormGroup>
                    <FormControlLabel
                      className={classes.switchFormGroupSupplier}
                      control={(
                        <Switch
                          checked={active === 'approved'}
                          onChange={() => this.handleChangeView('approved')}
                          id="approved"
                          value="approved"
                          color="primary"
                        />
                      )}
                      label="View Approved Products"
                    />
                    <FormControlLabel
                      className={classes.switchFormGroupSupplier}
                      control={(
                        <Switch
                          checked={active === 'proposed'}
                          onChange={() => this.handleChangeView('proposed')}
                          id="proposed"
                          value="proposed"
                          color="primary"
                        />
                      )}
                      label="View Proposed Products"
                    />
                  </FormGroup>
                </ClickAwayListener>
              </Paper>
            </Grow>
          </Popper>
          <CustomIconButton
            toolTip="Manage Expiries"
            buttonRef={(node) => {
              this.manageExpiries = node;
            }}
            onClickHandler={() => {}}
          >
            <img src={expirieslogo} style={{ width: '28px' }} alt="" />
          </CustomIconButton>
          <Tooltip title="Export List" style={{ marginLeft: '25px' }}>
            <IconButton
              onClick={this.handleSavePrintOpen}
            >
              <Export className={classes.svgIcon} />
            </IconButton>
          </Tooltip>
          <SavePrintPopper
            state={this.state}
            classes={classes}
            popperHeader={title}
            componentRef={componentRef}
            handlePrintButton={this.handlePrintButton}
            handleSaveButton={this.handleSaveButton}
          />
          <Tooltip title="Manage Columns" style={{ margin: '1px 0 0 25px' }}>
            <IconButton
              className={!openViewColumnMenu ? classes.iconButtonActive : classes.iconButton}
              buttonRef={(node) => {
                this.anchorEl = node;
              }}
              aria-owns={openViewColumnMenu ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={this.handleToggleViewColumnMenu}
            >
              <img src={columnslogo} style={{ width: '21px', height: '19px' }} alt="" />
            </IconButton>
          </Tooltip>
          <Popper
            id="menu-list-grow"
            className={classes.popper}
            style={{ padding: '10px', height: '20px' }}
            open={openViewColumnMenu}
            anchorEl={this.anchorEl}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper className={classes.paper} style={{ width: '250px', height: '450px', overflow: 'auto' }}>
                  <Paper
                    className={classes.paper}
                    style={{
                      padding: '3px', borderRadius: '1px', boxShadow: '1px 1px #e8e8e8', position: 'sticky', top: 0, zIndex: '500'
                    }}
                  >
                    <p style={{
                      fontSize: '11px', color: '#a4a4a4', marginLeft: '10px',
                    }}
                    >
                      <i>Toggle columns to show on the product table</i>
                    </p>
                  </Paper>

                  <FormGroup>
                    <FormControlLabel
                      className={classes.switchFormGroupSupplier}
                      control={(
                        <Switch
                          checked={!this.isColumnHidden('productName')}
                          onChange={handleChangeColumn}
                          value="productName"
                          color="primary"
                        />
                      )}
                      label="Product Name"
                    />
                    <FormControlLabel
                      className={classes.switchFormGroupSupplier}
                      control={(
                        <Switch
                          checked={!this.isColumnHidden('skuNumber')}
                          onChange={handleChangeColumn}
                          value="skuNumber"
                          color="primary"
                        />
                      )}
                      label="SKU"
                    />
                    <FormControlLabel
                      className={classes.switchFormGroupSupplier}
                      control={(
                        <Switch
                          checked={!this.isColumnHidden('category')}
                          onChange={handleChangeColumn}
                          value="Category"
                          color="primary"
                        />
                      )}
                      label="Category"
                    />
                    <FormControlLabel
                      className={classes.switchFormGroupSupplier}
                      control={(
                        <Switch
                          checked={!this.isColumnHidden('dispensingSize')}
                          onChange={handleChangeColumn}
                          value="dispensingSize"
                          color="primary"
                        />
                      )}
                      label="Dispensing Size"
                    />
                    <FormControlLabel
                      className={classes.switchFormGroupSupplier}
                      control={(
                        <Switch
                          checked={!this.isColumnHidden('brand')}
                          onChange={handleChangeColumn}
                          value="brand"
                          color="primary"
                        />
                      )}
                      label="Brand"
                    />
                    <FormControlLabel
                      className={classes.switchFormGroupSupplier}
                      control={(
                        <Switch
                          checked={!this.isColumnHidden('manufacturer')}
                          onChange={handleChangeColumn}
                          value="manufacturer"
                          color="primary"
                        />
                      )}
                      label="Manufacturer"
                    />
                    <FormControlLabel
                      className={classes.switchFormGroupSupplier}
                      control={(
                        <Switch
                          checked={!this.isColumnHidden('salesPrice')}
                          onChange={handleChangeColumn}
                          value="salesPrice"
                          color="primary"
                        />
                      )}
                      label="Sales Price"
                    />
                    <FormControlLabel
                      className={classes.switchFormGroupSupplier}
                      control={(
                        <Switch
                          checked={!this.isColumnHidden('reorderPoint')}
                          onChange={handleChangeColumn}
                          value="reorderPoint"
                          color="primary"
                        />
                      )}
                      label="Reorder Point"
                    />
                    <FormControlLabel
                      className={classes.switchFormGroupSupplier}
                      control={(
                        <Switch
                          checked={!this.isColumnHidden('reorderMax')}
                          onChange={handleChangeColumn}
                          value="reorderMax"
                          color="primary"
                        />
                      )}
                      label="Reorder Max"
                    />
                    <FormControlLabel
                      className={classes.switchFormGroupSupplier}
                      control={(
                        <Switch
                          checked={!this.isColumnHidden('loyaltyWeight')}
                          onChange={handleChangeColumn}
                          value="loyaltyWeight"
                          color="primary"
                        />
                      )}
                      label="Loyalty Weight"
                    />
                    <FormControlLabel
                      className={classes.switchFormGroupSupplier}
                      control={(
                        <Switch
                          checked={!this.isColumnHidden('preferredSupplier')}
                          onChange={handleChangeColumn}
                          value="preferredSupplier"
                          color="primary"
                        />
                      )}
                      label="Preferred Supplier"
                    />
                    <FormControlLabel
                      className={classes.switchFormGroupSupplier}
                      control={(
                        <Switch
                          checked={!this.isColumnHidden('backupSupplier')}
                          onChange={handleChangeColumn}
                          value="backupSupplier"
                          color="primary"
                        />
                      )}
                      label="Backup Supplier"
                    />
                    <FormControlLabel
                      className={classes.switchFormGroupSupplier}
                      control={(
                        <Switch
                          checked={!this.isColumnHidden('nearestExpiryDate')}
                          onChange={handleChangeColumn}
                          value="nearestExpiryDate"
                          color="primary"
                        />
                      )}
                      label="Nearest Expiry Date"
                    />
                    <FormControlLabel
                      className={classes.switchFormGroupSupplier}
                      control={(
                        <Switch
                          checked={!this.isColumnHidden('vatStatus')}
                          onChange={handleChangeColumn}
                          value="vatStatus"
                          color="primary"
                        />
                      )}
                      label="Vat Status"
                    />
                  </FormGroup>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Fragment>
        <Fragment>
          <RenderPopper
            anchorEl={this.addProductElement}
            onClickAway={this.handleCloseAddProduct}
            open={addProductOpen}
          >
            <MenuList style={{ marginTop: '10px' }}>
              <MenuItem onClick={this.handleCloseAddProduct}>
                <Link
                  to="/product/add"
                  style={supplyStyles.menuLink}
                >
                Add product
                </Link>
              </MenuItem>
              <MenuItem onClick={this.handleCloseAddProduct}>
                <Link
                  to="/product/import"
                  style={supplyStyles.menuLink}
                >
                Import product csv.
                </Link>
              </MenuItem>
            </MenuList>
          </RenderPopper>
        </Fragment>
      </Fragment>
    );
  }
}

CustomToolBar.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
  handleClickSearch: PropTypes.func.isRequired,
  handleHideSearch: PropTypes.func.isRequired,
  isSearchActive: PropTypes.bool,
  handleSearchTextChange: PropTypes.func.isRequired,
  handleChangeColumn: PropTypes.func.isRequired,
  status: PropTypes.func.isRequired,
  handleViewProposed: PropTypes.func.isRequired,
  componentRef: PropTypes.instanceOf(Object),
  currentPath: PropTypes.string.isRequired,
  hiddenColumns: PropTypes.func.isRequired,

};

CustomToolBar.defaultProps = {
  isSearchActive: false,
  componentRef: {}
};

export default withStyles(ToolbarStyles)(CustomToolBar);
