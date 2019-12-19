import React, { Fragment } from 'react';
import { Grid, Card, CardMedia } from '@material-ui/core';
import PropTypes from 'prop-types';
import Rating from './Rating';
import capitalize from '../../utils/capitalize';

const SupplierDescription = (props) => {
  const { classes, renderTextField, supplier } = props;
  const { supplierContacts, supplierMeta, supplierratingSet } = supplier;
  const rating = supplierratingSet[0] && supplierratingSet[0].rating;
  const contacts = supplierContacts[0];
  const meta = supplierMeta[0];
  return (
    <Fragment>
      <Grid
        container
        spacing={24}
        className={classes.containerGrid2}
      >
        <Grid container item xs={12}>
          <Grid container item xs={8} spacing={24}>
            <Grid item xs={12}>
              <div style={{ marginBottom: '9px' }} className={classes.category}>
                {renderTextField(
                  classes.descriptionFields,
                  'supplier',
                  'Supplier ID',
                  supplier.id
                )}
              </div>
              <div>
                <div><span className={classes.addressTextHeader}>Address</span></div>
                <div style={{ marginTop: '5px' }}><span className={classes.addressText}>{`${contacts && contacts.addressLine1}`}</span></div>
                <div><span className={classes.addressText}>{`${(contacts && contacts.addressLine2) || ''},`}</span></div>
                <div><span className={classes.addressText}>{`${capitalize(contacts && contacts.lga)},`}</span></div>
                <div><span className={classes.addressText}>{`${contacts && contacts.city.name},`}</span></div>
                <div><span className={classes.addressText}>{`${contacts && contacts.country.name}`}</span></div>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Card elevation={0} className={classes.card}>
              <CardMedia
                className={classes.media}
                image={meta && meta.logo}
                title="Supplier Image"
              />
            </Card>
          </Grid>
        </Grid>
        <Grid container item xs={4}>
          <div>
            {renderTextField(
              classes.descriptionFields,
              'email',
              'Email',
              contacts && contacts.email
            )}
          </div>
        </Grid>
        <Grid container item xs={4}>
          <div>
            {renderTextField(
              classes.descriptionFields,
              'mobile',
              'Mobile',
              contacts && contacts.mobileNumber
            )}
          </div>
        </Grid>
        <Grid container item xs={4}>
          <div>
            {
              supplier.isApproved ? (
                <Rating rating={rating} starClass="supplierStar" />
              )
                : ''
            }
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

SupplierDescription.propTypes = {
  classes: PropTypes.shape({
    containerGrid: PropTypes.string,
    containerGrid2: PropTypes.string,
    category: PropTypes.string,
    card: PropTypes.string,
    media: PropTypes.string,
    descriptionFields: PropTypes.string,
    addressText: PropTypes.string,
    addressTextHeader: PropTypes.string
  }).isRequired,
  renderTextField: PropTypes.func.isRequired,
  supplier: PropTypes.instanceOf(Object).isRequired
};

export default SupplierDescription;
