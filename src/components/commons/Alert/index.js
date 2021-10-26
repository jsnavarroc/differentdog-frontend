import React from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';
import Card from '../Card';

const AlertError = ({ error }) => {
  return (
    <Card>
      <Alert error={error} />
    </Card>
  );
};

AlertError.propTypes = {
  error: PropTypes.string,
};

export default AlertError;
