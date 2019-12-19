import PropTypes from 'prop-types';

const {
  string, objectOf
} = PropTypes;

export const ServiceIconsType = {
  style: objectOf(Object).isRequired,
  fill: string.isRequired,
  lineFill: string.isRequired,
  stroke: string.isRequired,
  opacity: string.isRequired,
};

export default ServiceIconsType;
