import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MenuList, MenuItem } from '@material-ui/core';
import searchIcon from '../../../assets/images/stock/search.png';
import approveIcon from '../../../assets/images/stock/approve.png';
import addBatchIcon from '../../../assets/images/stock/addBatch.png';
import stockCountIcon from '../../../assets/images/stock/stockCount.png';

import ProposedEdits from '../../../container/stock/ProposedEdits';
import { ToolbarStyles } from '../../../assets/styles/stock/stock';
import { CustomIconButton, RenderPopper } from '../utils/utils';
import TableSearch from './TableSearch';

export class CustomToolBar extends Component {
  state = {
    open: false,
    stockOpen: false,
    batchOpen: false
  };

  handleToggle = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  handleToggleStock = () => {
    this.setState(prevState => ({ stockOpen: !prevState.stockOpen }));
  };

  handleToggleBatch = () => {
    this.setState(prevState => ({ batchOpen: !prevState.batchOpen }));
  };

  handleCloseStock = (event) => {
    !this.StockElement.contains(event.target) && this.setState({ stockOpen: false });
  };

  handleCloseBatch = (event) => {
    !this.addBatchEl.contains(event.target) && this.setState({ batchOpen: false });
  };

  renderMenuItem = (handleClose, name, route) => (
    <MenuItem onClick={handleClose} key={name}>
      <Link
        to={route}
        style={ToolbarStyles.menuLink}
      >
        {name}
      </Link>
    </MenuItem>
  )

  render() {
    const {
      handleClickSearch,
      isSearchActive,
      handleHideSearch,
      isAdmin,
      handleTextChange
    } = this.props;
    const { open, stockOpen, batchOpen } = this.state;

    const stockAddMenu = [
      { name: 'Add Individual Product Batch', route: '/stock/add_single' },
      { name: 'Upload Product Batch CSV', route: '/stock/add_csv' },
      { name: 'Batch Upload Log', route: '/stock/log' }
    ];

    const stockCountMenu = [
      { name: 'Initiate Stock count', route: '/stock/#' },
      { name: 'Reconcile Stock Differences', route: '/stock/#' },
      { name: 'View Previous Stock Count', route: '/stock/#' }
    ];

    return (
      <Fragment>
        {isSearchActive ? (
          <TableSearch onHide={handleHideSearch} handleTextChange={handleTextChange} />
        ) : ('')}
        <Fragment>
          <CustomIconButton
            buttonRef={(node) => { this.anchorEl = node; }}
            toolTip="Search"
            onClickHandler={handleClickSearch}
          >
            <img src={searchIcon} style={{ width: '20px' }} alt="search" />
          </CustomIconButton>
          {isAdmin
            && (
              <CustomIconButton
                toolTip="Approve"
                buttonRef={(node) => {
                  this.anchorEl = node;
                }}
                onClickHandler={this.handleToggle}
              >
                <img src={approveIcon} style={{ width: '20px' }} alt="approve" />
              </CustomIconButton>
            )}
          <CustomIconButton
            toolTip="Add batch"
            buttonRef={(node) => {
              this.addBatchEl = node;
            }}
            onClickHandler={this.handleToggleBatch}
          >
            <img src={addBatchIcon} style={{ width: '22px', height: '22px' }} alt="add-batch" />
          </CustomIconButton>
          <CustomIconButton
            toolTip="Stock count"
            buttonRef={(node) => {
              this.StockElement = node;
            }}
            onClickHandler={this.handleToggleStock}
          >
            <img src={stockCountIcon} style={{ width: '22px' }} alt="stock-count" />
          </CustomIconButton>
        </Fragment>
        <RenderPopper
          anchorEl={this.addBatchEl}
          onClickAway={this.handleCloseBatch}
          open={batchOpen}
          modifiers={{
            offset: {
              enabled: true,
              offset: '-2vw, 1vh',
            }
          }}
        >
          <MenuList>
            {stockAddMenu.map(
              ({ name, route }) => this.renderMenuItem(this.handleCloseBatch, name, route)
            )}
          </MenuList>
        </RenderPopper>
        <RenderPopper
          anchorEl={this.StockElement}
          onClickAway={this.handleCloseStock}
          open={stockOpen}
          popperPlacement="bottom-end"
          modifiers={{
            offset: {
              enabled: true,
              offset: '0, 1vh',
            }
          }}
        >
          <MenuList>
            {stockCountMenu.map(
              ({ name, route }) => this.renderMenuItem(this.handleCloseStock, name, route)
            )}
          </MenuList>
        </RenderPopper>
        <RenderPopper
          anchorEl={this.anchorEl}
          open={open}
          className="approve-products"
          popperPlacement="bottom"
        >
          <ProposedEdits />
        </RenderPopper>
      </Fragment>
    );
  }
}

CustomToolBar.propTypes = {
  handleClickSearch: PropTypes.func.isRequired,
  handleHideSearch: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  isSearchActive: PropTypes.bool,
  handleTextChange: PropTypes.func.isRequired
};

CustomToolBar.defaultProps = {
  isSearchActive: false
};

export default CustomToolBar;
