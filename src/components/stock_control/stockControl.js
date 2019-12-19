import React, { Fragment, Component } from 'react';
import { Query } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GET_APPROVED_PRODUCTS } from '../products/productQueries';
import ProductNavBar from '../products/productNavBar';
import withAuth from '../withAuth';
import DataTable from './Table/DataTable';
import DataTableLoader from '../dataTable/dataTableLoader';
import '../../assets/styles/stock/stock_products.scss';

import { StateContext } from '../../providers/stateProvider';

export class StockControl extends Component {
  state = {
    currentPage: 1,
    currentPageCount: 10,
  }

  componentDidMount() {
    const [, dispatch] = Object.values(this.context);
    dispatch({
      type: 'changeGrid',
      grid: 'grid3'
    });
  }

  handleChangeRowsPerPage = (event) => {
    this.setState({ currentPageCount: +event.target.value });
  };

  handleChangePage = (_, newPage) => {
    this.setState({ currentPage: newPage + 1 });
  };

  createColumns = columns => columns.map(title => ({
    id: title.replace(/ +/g, ''),
    label: title.toUpperCase()
  }));

  static contextType = StateContext;

  render() {
    const { currentPage, currentPageCount } = this.state;
    const { history, session } = this.props;
    const columnHeaders = ['id', 'name', 'sku', ' dispensing size', 'qty in stock'];
    return (
      <Fragment>
        <ProductNavBar activeGrid="grid4" />
        <Query
          query={GET_APPROVED_PRODUCTS}
          variables={
            {
              pageCount: currentPageCount,
              pageNumber: currentPage
            }
          }
        >
          {({ loading, data, error }) => {
            if (loading) return <DataTableLoader />;
            if (error) return `Error! ${error.message}`;
            const {
              approvedProducts, productsTotalNumber
            } = data;

            const products = approvedProducts.map(product => ({
              id: product.id,
              name: product.productName,
              quantity: product.quantityInStock,
              sku: product.skuNumber,
              dispensingSize: product.dispensingSize.name,
              description: product.description,
              image: product.image,
              tags: product.tags,
              batchId: product.batchInfo
            })).filter(product => product !== false);

            const isAuthorized = session.me.role.name.match(/(Master Admin|Operations Admin)/);

            return (
              <div name="stock_products">
                <DataTable
                  title="Products"
                  isAdmin={!!isAuthorized}
                  columns={this.createColumns(columnHeaders)}
                  data={products}
                  totalCount={productsTotalNumber}
                  rowsPerPage={currentPageCount}
                  page={currentPage}
                  handleChangePage={this.handleChangePage}
                  handleChangeRowsPerPage={this.handleChangeRowsPerPage}
                  onRowClick={(rowId) => {
                    history.push(`products/${rowId}/details`);
                  }}
                />
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

StockControl.propTypes = {
  session: PropTypes.objectOf(PropTypes.object),
  history: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number])
};

StockControl.defaultProps = {
  session: {},
  history: {}
};

export default withAuth(withRouter(StockControl));
