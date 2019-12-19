import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import { Grid, Button } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';
import BatchForm from './BatchForm';
import withAuth from '../withAuth';
import CREATE_BATCH_INFO from '../../mutations/batch/createBatchInfo';
import GET_FILTERED_PRODUCTS from '../../queries/filteredProductsQuery';
import { FILTER_APPROVED_SUPPLIERS } from '../../queries/getSuppliers';
import { AddBatchButtons } from './utils/utils';
import notify from '../shared/Toaster';
import { stockFormStyles as styles } from '../../assets/styles/stock/addStockStyles';

import { StateContext } from '../../providers/stateProvider';

export class IndividualBatch extends Component {
  state = {
    productName: '',
    productId: '',
    dateReceived: '',
    batchNumber: '',
    supplier: '',
    supplierId: '',
    expiryDate: '',
    costPerItem: '',
    quantityReceived: '',
    deliveryPromptness: '',
    serviceQuality: '',
    notes: '',
    searching: false,
    filteredProducts: [],
    filteredSuppliers: [],
    openPopper: false,
    AnchorEl: {},
    placement: '',
    active: '',
    loading: false,
    errorText: '',
  };

  componentDidMount() {
    const [, dispatch] = Object.values(this.context);
    dispatch({
      type: 'changeGrid',
      grid: 'grid3'
    });
  }

  handleChange = (event, client) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    if (name === 'productName' && value.length > 2) {
      this.setState({
        searching: true,
        active: 'productName',
        errorText: '',
        anchorEl: event.target
      });
      this.filterProducts(client, value);
    } else if (name === 'supplier' && value.length > 2) {
      this.setState({
        searching: true,
        active: 'supplier',
        errorText: '',
        anchorEl: event.target
      });
      this.filterSuppliers(client, value);
    }
  };

  filterProducts = (client, value) => {
    client.query({
      query: GET_FILTERED_PRODUCTS,
      variables: { productName: value }
    }).then(({ data: { filterProducts: { edges } } }) => {
      const products = edges.map(edge => edge.node);
      this.setState({
        filteredProducts: products,
        errorText: '',
        openPopper: true,
        searching: false
      });
    }).catch(() => {
      const err = 'Product matching search query does not exist';
      this.setState({
        filteredProducts: [],
        errorText: err,
        openPopper: false,
        searching: false
      });
    });
  };

  filterSuppliers = (client, value) => {
    client.query({
      query: FILTER_APPROVED_SUPPLIERS,
      variables: { isApproved: true, supplier: value }
    }).then(({ data: { filterSuppliers: { edges } } }) => {
      const suppliers = edges.map(edge => edge.node);
      this.setState({
        filteredSuppliers: suppliers,
        errorText: '',
        openPopper: true,
        searching: false
      });
    }).catch(() => {
      const err = 'Supplier matching search query does not exist';
      this.setState({
        filteredSuppliers: [],
        errorText: err,
        openPopper: false,
        searching: false
      });
    });
  };

  displaySelected = (active, name, id) => {
    if (active === 'productName') {
      this.setState({
        [active]: name,
        productId: id,
        openPopper: false,
      });
    } else {
      this.setState({
        [active]: name,
        supplierId: id,
        openPopper: false,
      });
    }
  }

  popperClickAway = () => {
    this.setState({
      openPopper: false,
    });
  }

  handleServiceButtons = (id) => {
    this.setState({
      serviceQuality: id,
    });
  }

  handleAddBatch = async () => {
    const { history } = this.props;
    await this.sendBatchInfo();
    setTimeout(() => history.push('/stock'), 1500);
  }

  sendBatchInfo = () => {
    const { addBatch } = this.props;
    this.setState({ loading: true });
    const {
      notes,
      dateReceived,
      deliveryPromptness,
      expiryDate,
      productId,
      quantityReceived,
      serviceQuality,
      supplierId,
      costPerItem,
    } = this.state;

    addBatch({
      variables: {
        notes,
        dateReceived,
        deliveryPromptness,
        expiryDate,
        productId,
        quantityReceived,
        serviceQuality,
        supplierId,
        costPerItem,
      }
    }).then((res) => {
      notify(res.data.createBatchInfo.message);
    }).catch((err) => {
      notify(err.errors[0].message);
    });
  };

  handleAddMoreBatches = async () => {
    await this.sendBatchInfo();
    setTimeout(() => {
      this.setState({
        productName: '',
        productId: '',
        dateReceived: '',
        batchNumber: '',
        supplier: '',
        supplierId: '',
        expiryDate: '',
        costPerItem: '',
        quantityReceived: '',
        orderingSize: '',
        deliveryPromptness: '',
        serviceQuality: '',
        notes: ''
      });
    }, 1200);
  };

  validated = () => {
    const {
      productId, supplierId, dateReceived, expiryDate,
      deliveryPromptness, quantityReceived, serviceQuality, costPerItem
    } = this.state;
    return (!productId || !supplierId || !dateReceived || !expiryDate
    || deliveryPromptness === '' || !quantityReceived || !serviceQuality || !costPerItem);
  }

  static contextType = StateContext;

  render() {
    return (
      <Grid container style={styles.container}>
        <Grid item xs={1} style={styles.backBox}>
          <Button style={styles.backButton}>
            <Link to="/stock" style={styles.link}>
              <ArrowBack fontSize="large" />
            </Link>
          </Button>
        </Grid>
        <Grid item xs={10}>
          <AddBatchButtons
            styles={styles}
            validated={this.validated}
            handleAddBatch={this.handleAddBatch}
            handleAddMoreBatches={this.handleAddMoreBatches}
          />
          <BatchForm
            state={this.state}
            handleChange={this.handleChange}
            displaySelected={this.displaySelected}
            popperClickAway={this.popperClickAway}
            handleServiceButtons={this.handleServiceButtons}
          />
        </Grid>
      </Grid>
    );
  }
}

IndividualBatch.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
  addBatch: PropTypes.func.isRequired
};

IndividualBatch.defaultProps = {
  history: {}
};

const ADD_BATCH = graphql(CREATE_BATCH_INFO, { name: 'addBatch' });

export default withAuth(compose(ADD_BATCH)(withRouter(IndividualBatch)));
