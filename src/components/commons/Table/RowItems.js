import React from 'react';
import map from 'lodash/map';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import Line from './Line';
import useStyles from './useStyles';

const RowItems = (props) => {
  const { item, latsPosition } = props;
  const totalIntems = Object.keys(item).length;
  const spaceColums = totalIntems / 12;
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.products}>
        <Row className={classes.rowItem}>
          {map(item, (value, key) => {
            return (
              <Col xs={12} md={spaceColums} key={key}>
                <p className={classes.text}>{value}</p>
              </Col>
            );
          })}
        </Row>
      </Grid>
      {latsPosition ? <Line typeLine={'solid'} /> : <Line />}
    </>
  );
};

RowItems.defaultProps = {
  item: {
    id: 'Azyu6XSmSmRIaKFf',
    first_name: 'Mai',
    last_name: 'Perry-Gosling',
    email: 'mai@arghhtest.com',
    masked_number: '************5758',
  },
};

RowItems.propTypes = {
  item: PropTypes.object.isRequired,
  latsPosition: PropTypes.bool.isRequired,
};
export default RowItems;
