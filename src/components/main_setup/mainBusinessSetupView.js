import React, { Fragment } from 'react';
import PropTypes, { object } from 'prop-types';
import { Link } from 'react-router-dom';

// MATERIAL UI COMPONENTS
import {
  Grid,
  Paper,
  Button,
  Typography,
  TextField,
  Link as SocialLink
} from '@material-ui/core';

// IMAGES AND ICONS
import ArrowBack from '@material-ui/icons/ArrowBack';
import LogoPlaceholder from '../../assets/images/business-placeholder.png';

// SHARED COMPONENTS
import withAuth from '../withAuth';
import { MainBusinessSetUpStyles as styles, SetupHeader } from '../../assets/styles/setup';

import { useStateValue } from '../../providers/stateProvider';

const MainSetup = (props) => {
  const { session } = props;
  const { businessUser } = session.me;
  const [, dispatch] = Object.values(useStateValue());

  React.useEffect(() => {
    dispatch({
      type: 'changeGrid',
      grid: 'grid9'
    });
  }, []);

  const {
    id,
    addressLine1,
    businessEmail,
    facebook,
    instagram,
    legalName,
    phoneNumber,
    tradingName,
    twitter,
    website,
  } = businessUser;

  return (
    <Fragment>
      <Grid container style={styles.container}>
        <Grid item xs={1} style={SetupHeader.backBox}>
          <Button style={SetupHeader.backButton}>
            <Link to="/main_setup/business_information" style={SetupHeader.link}>
              <ArrowBack fontSize="large" />
            </Link>
          </Button>
        </Grid>
        <Grid item xs={10}>
          <Grid style={styles.profileHeader}>
            <Typography variant="h5">
              Back
            </Typography>
            <Link to={`/main_setup/business_information_update/${id}`} style={SetupHeader.editButton}>
              Edit
            </Link>
          </Grid>
          <Paper style={styles.paper}>
            <Grid>
              <Grid item style={styles.contentHeader}>
                <Typography variant="h5">
                  Business Information
                </Typography>
              </Grid>
            </Grid>
            <Grid item style={styles.profileBox}>
              <Grid item xs={8} style={styles.formRow}>
                <TextField
                  fullWidth
                  label="Legal Name"
                  value={legalName}
                  margin="normal"
                  style={styles.textField}
                  InputProps={{ disableUnderline: true, readOnly: true }}
                />
                <TextField
                  fullWidth
                  label="Trading Name"
                  value={tradingName}
                  margin="normal"
                  style={styles.textField}
                  InputProps={{ disableUnderline: true, readOnly: true }}
                />
                <TextField
                  fullWidth
                  label="Address"
                  value={addressLine1}
                  margin="normal"
                  style={styles.textField}
                  InputProps={{ disableUnderline: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={4} style={styles.formRow}>
                <img src={LogoPlaceholder} alt="Logo" />
              </Grid>
            </Grid>
            <Grid>
              <Grid item style={styles.subContentHeader}>
                <Typography variant="h6">
                  Contact Information
                </Typography>
              </Grid>
            </Grid>
            <Grid item style={styles.profileBox}>
              <Grid item xs={6} style={styles.formRow}>
                <TextField
                  fullWidth
                  label="Primary Phone"
                  value={phoneNumber}
                  margin="normal"
                  style={styles.textField}
                  InputProps={{ disableUnderline: true, readOnly: true }}
                />
                <SocialLink
                  href={twitter}
                  style={styles.linkcolor}
                  target="_blank"
                  rel="noopener"
                >
                  Twitter
                </SocialLink>
              </Grid>
              <Grid item xs={6} style={styles.formRow}>
                <TextField
                  fullWidth
                  label="Email"
                  value={businessEmail}
                  margin="normal"
                  style={styles.textField}
                  InputProps={{ disableUnderline: true, readOnly: true }}
                />
                <SocialLink
                  href={facebook}
                  style={styles.linkcolor}
                  target="_blank"
                  rel="noopener"
                >
                  Facebook
                </SocialLink>
              </Grid>
              <Grid item xs={6} style={styles.formRow}>
                <Grid item style={styles.linkGrid}>
                  <SocialLink
                    href={instagram}
                    style={styles.linkcolor}
                    target="_blank"
                    rel="noopener"
                  >
                    Instagram
                  </SocialLink>
                </Grid>
                <Grid item>
                  <SocialLink
                    href={website}
                    style={styles.linkcolor}
                    target="_blank"
                    rel="noopener"
                  >
                    Website
                  </SocialLink>
                </Grid>
              </Grid>
            </Grid>
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
    }).isRequired,
    outlets: PropTypes.array
  }).isRequired,
};

export default withAuth(MainSetup);
