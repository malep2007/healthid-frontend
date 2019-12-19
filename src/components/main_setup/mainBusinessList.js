import React from 'react';
import PropTypes, { object } from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from '@material-ui/core';
import OpenInNew from '@material-ui/icons/OpenInNew';
import { MainOutletSetupStyles } from '../../assets/styles/setup';

export const MainBusiness = (props) => {
  const { business } = props;
  if (!_.isEmpty(business)) {
    return (
      <Table>
        <TableBody>
          <TableRow key={business.id}>
            <TableCell>{business.legalName}</TableCell>
            <TableCell>{business.businessEmail}</TableCell>
            <TableCell align="right">
              <IconButton>
                <Link to={`/main_setup/business_information/${business.id}`} style={MainOutletSetupStyles.optionsLink}>
                  <OpenInNew />
                </Link>
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }

  return null;
};

MainBusiness.propTypes = {
  business: PropTypes.instanceOf(object).isRequired
};

export default MainBusiness;
