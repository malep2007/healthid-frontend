import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Paper, Popper, Fade, ClickAwayListener,
  List, ListItem, ListItemText
} from '@material-ui/core';

export const SearchFieldPopper = ({
  state: {
    openPopper,
    anchorEl,
    active,
    filteredProducts,
    filteredSuppliers,
  },
  placement,
  styles,
  displaySelected,
  popperClickAway
}) => (
  <Popper
    open={openPopper}
    anchorEl={anchorEl}
    placement={placement}
    transition
  >
    {({ TransitionProps }) => (
      <ClickAwayListener onClickAway={popperClickAway}>
        <Fade {...TransitionProps} timeout={350}>
          <Paper
            style={styles.rootPaper}
          >
            <Grid container>
              <Grid item xs={12} style={styles.zeroBottomPadding}>
                <List style={styles.listedCustomers}>
                  {active === 'productName'
                    ? (filteredProducts.map(({ id, productName }) => (
                      <ListItem
                        key={id}
                        dense
                        button
                        onClick={() => displaySelected(active, productName, id)}
                      >
                        <ListItemText primary={productName} />
                      </ListItem>
                    ))) : (filteredSuppliers.map(({ id, suppliersmetaSet }) => {
                      const { displayName } = suppliersmetaSet[0];
                      return (
                        <ListItem
                          key={id}
                          dense
                          button
                          onClick={() => displaySelected(active, displayName, id)}
                        >
                          <ListItemText primary={displayName} />
                        </ListItem>
                      );
                    }))
                  }
                </List>
              </Grid>
            </Grid>
          </Paper>
        </Fade>
      </ClickAwayListener>
    )}
  </Popper>
);

SearchFieldPopper.propTypes = {
  state: PropTypes.instanceOf(Object),
  styles: PropTypes.instanceOf(Object),
  placement: PropTypes.string,
  displaySelected: PropTypes.func,
  popperClickAway: PropTypes.func,
};

SearchFieldPopper.defaultProps = {
  state: {},
  styles: {},
  placement: 'bottom-start',
  displaySelected: () => {},
  popperClickAway: () => {},
};

export default SearchFieldPopper;
