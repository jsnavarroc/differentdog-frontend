import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import useStyles from './useStyles';
import Line from './Line';

const Header = ({ titles }) => {
  const classes = useStyles();
  // 12 is the number total colums in react-flexbox-grid
  const spaceColums = titles.length / 12;
  return (
    <>
      <Grid>
        <Row className={classes.row}>
          {titles.map((title, key) => (
            <Col xs={12} md={spaceColums} key={`titleTable${key + 1}`}>
              <p className={classes.text}>{title}</p>
            </Col>
          ))}
        </Row>
      </Grid>

      <Line typeLine={'solid'} />
    </>
  );
};

Header.defaultProps = {
  titles: ['id', 'Name', 'Lastname', 'Email', 'Number Card'],
};

Header.propTypes = {
  titles: PropTypes.array.isRequired,
};
export default Header;
