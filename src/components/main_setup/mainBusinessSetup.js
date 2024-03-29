import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { object } from 'prop-types';
import {
  Grid,
  Paper,
  Button,
  Typography,
} from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';

import MainBusinessList from './mainBusinessList';
import { MainBusinessSetUpStyles as styles, SetupHeader } from '../../assets/styles/setup';
import withAuth from '../withAuth';

import { useStateValue } from '../../providers/stateProvider';

export const MainSetup = (props) => {
  const [, dispatch] = Object.values(useStateValue());

  React.useEffect(() => {
    dispatch({
      type: 'changeGrid',
      grid: 'grid9'
    });
  }, []);

  const { session } = props;
  const { businessUser } = session.me;
  return (
    <Fragment>
      <Grid container style={styles.container}>
        <Grid item xs={1} style={SetupHeader.backBox}>
          <Button style={SetupHeader.backButton}>
            <Link to="/main_setup" style={SetupHeader.link}>
              <ArrowBack fontSize="large" />
            </Link>
          </Button>
        </Grid>
        <Grid item xs={10}>
          <Grid style={styles.profileHeader}>
            <Typography variant="h5">
              Back
            </Typography>
          </Grid>
          <Paper style={styles.paper}>
            <Grid>
              <Grid item style={styles.contentHeader}>
                <Typography variant="h6">
                  User Business
                </Typography>
              </Grid>
            </Grid>
            <MainBusinessList business={businessUser} />
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

MainSetup.propTypes = {
  session: PropTypes.shape({
    me: PropTypes.shape({
      businessUser: PropTypes.instanceOf(object).isRequired,
      outlets: PropTypes.array
    })
  }).isRequired,
};

export default withAuth(MainSetup);
