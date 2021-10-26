import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { colors } from '../../utils';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() =>
  createStyles({
    dashed: {
      borderBottom: `1px inset ${colors.gray}`,
      borderBottomStyle: 'dashed',
    },
    solid: {
      borderBottom: `1px inset ${colors.gray}`,
      borderBottomStyle: 'solid',
    },
  })
);

const Line = ({ typeLine }) => {
  const classes = useStyles();
  switch (typeLine) {
    case 'solid': {
      return <div className={classes.solid} />;
    }
    default: {
      return <div className={classes.dashed} />;
    }
  }
};

Line.defaultProps = {
  typeLine: 'dashed',
};

Line.propTypes = {
  typeLine: PropTypes.string,
};
export default Line;
