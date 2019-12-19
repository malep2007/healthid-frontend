import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Fade, Popper, Paper, TableRow, TablePagination, TableCell,
  TableBody, Table
} from '@material-ui/core';
import ProductCard from '../ProductCard';
import TableHeader from './TableHeader';
import TableToolBar from './TableToolBar';
import CustomCheckbox from '../../shared/customCheckbox';
import { TableStyles } from '../../../assets/styles/stock/stock';
import { getSortedData, RenderPopper } from '../utils/utils';
import BatchCard from '../../../container/stock/BatchCard';

export const DataTable = ({
  classes, columns, data, title, onRowClick, isAdmin, totalCount,
  rowsPerPage, page, handleChangePage, handleChangeRowsPerPage
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [editPopperAnchor, setEditPopperAnchor] = useState(null);
  const [editable, setEditable] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [prevSearchValue, setPrevSearchValue] = useState('');
  const [openPopper, setOpenPopper] = useState(false);
  const [order, setOrder] = useState('asc');
  const [rows, setRows] = useState(data);
  const [hoveredItem, setHoveredItem] = useState({});
  const [orderBy, setOrderBy] = useState('name');
  const [selected, setSelected] = useState([]);

  const handleRequestSort = (_, property) => {
    const isDesc = orderBy === property && order === 'desc';

    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  };

  React.useEffect(() => {
    setRows(data);
  }, [data]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelections = rows.map(product => product.id);
      setSelected(newSelections);
      return;
    }
    setSelected([]);
  };

  const handleClick = (_, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleTextChange = (event) => {
    let searchResults = [];
    const searchText = event.target.value;
    const searchMatch = new RegExp(searchText, 'i');

    if (searchText !== prevSearchValue && searchText.length > 0) {
      setPrevSearchValue(searchText);
      searchResults = data.filter(row => searchMatch.test(row.name) || searchMatch.test(row.sku));
      setRows(searchResults);
    } else {
      setRows(data);
      setPrevSearchValue('');
    }
  };

  const handlePopperClick = (event) => {
    const hoverData = rows.find(value => value.name === event.currentTarget.innerText);

    setAnchorEl(event.currentTarget);
    setHoveredItem(hoverData);
    setOpenPopper(true);
  };

  const handleClickInverseSelection = () => {
    const newSelected = [];

    rows.forEach((row) => {
      if (!selected.find(selectedId => selectedId === row.id)) {
        newSelected.push(row.id);
      }
    });
    setSelected(newSelected);
  };

  const handleHideSearch = () => {
    setIsSearchActive(false);
    setRows(data);
    setPrevSearchValue('');
  };

  const handleClickSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleClickDeselectAll = () => {
    setSelected([]);
  };

  const onEditQuantity = () => {
    const anchorElement = document.querySelectorAll('.tool-bar-elevation');
    setEditPopperAnchor(anchorElement[0]);
    setEditable(!editable);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const selectedRow = rows.filter(word => word.id === selected[0])[0];
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableToolBar
          name="toolbar"
          isAdmin={isAdmin}
          title={`${totalCount} ${title}`}
          numSelected={selected.length}
          handleTextChange={handleTextChange}
          handleClickDeselectAll={handleClickDeselectAll}
          isSearchActive={isSearchActive}
          handleEdit={onEditQuantity}
          handleHideSearch={handleHideSearch}
          handleClickSearch={handleClickSearch}
          handleClickInverseSelection={handleClickInverseSelection}
        />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <TableHeader
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headRows={columns}
            />
            <TableBody>
              {getSortedData(rows, page, rowsPerPage, order, orderBy)
                .map((row) => {
                  const isItemSelected = isSelected(row.id);
                  const {
                    id, name, sku, dispensingSize, quantity
                  } = row;
                  return (
                    <TableRow
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={id}
                      selected={isItemSelected}
                      onClick={() => {
                        onRowClick(id);
                      }}
                    >
                      <TableCell padding="checkbox" align="center">
                        <CustomCheckbox
                          checked={isItemSelected}
                          onClick={(event) => {
                            event.stopPropagation();
                            handleClick(event, id);
                          }}
                        />
                      </TableCell>
                      <TableCell align="left">{id}</TableCell>
                      <TableCell align="left">
                        <span
                          onMouseEnter={(event) => {
                            event.stopPropagation();
                            handlePopperClick(event);
                          }}
                          onMouseLeave={(event) => {
                            event.stopPropagation();
                            setOpenPopper(!openPopper);
                          }}
                          className={classes.name}
                        >
                          {name}
                        </span>
                      </TableCell>
                      <TableCell align="left">{sku}</TableCell>
                      <TableCell align="left">{dispensingSize}</TableCell>
                      <TableCell align="left">{quantity}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={totalCount}
          rowsPerPage={rowsPerPage}
          page={page - 1}
          backIconButtonProps={{
            'aria-label': 'Previous Page'
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page'
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <Popper
        placement="right-start"
        transition
        disablePortal
        open={openPopper}
        anchorEl={anchorEl}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <ProductCard data={hoveredItem} />
            </Paper>
          </Fade>
        )}
      </Popper>
      <RenderPopper
        anchorEl={editPopperAnchor}
        className={classes.popperWrapper}
        open={editable && selected.length > 0}
      >
        {(editable && selected.length > 0)
          && (
            <BatchCard
              data={selectedRow.batchId}
              name={selectedRow.name}
              product={selected[0]}
            />
          )
        }
      </RenderPopper>
    </div>
  );
};

DataTable.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  columns: PropTypes.arrayOf(String).isRequired,
  data: PropTypes.arrayOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  onRowClick: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired
};

export default withStyles(TableStyles)(DataTable);
