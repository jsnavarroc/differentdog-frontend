import React from 'react';
import PropTypes from 'prop-types';
import RowItems from './RowItems';
import Header from './Header';
import Card from '../Card';

const Table = (props) => {
  const { data, titles } = props;
  return (
    <>
      <Card>
        <Header titles={titles} />
        {data.map((item, key) => {
          return (
            <RowItems
              key={`product-${key}`}
              item={item}
              latsPosition={key + 1 === data.length}
            />
          );
        })}
      </Card>
    </>
  );
};

Table.defaultProps = {
  titles: ['id', 'Name', 'Lastname', 'Email', 'Number Card'],
  data: [
    {
      id: '1',
      first_name: 'Mai',
      last_name: 'Perry-Gosling',
      email: 'mai@arghhtest.com',
      masked_number: '************5758',
    },
    {
      id: '2',
      first_name: 'Example 2',
      last_name: 'Example 2',
      email: 'example@example.com',
      masked_number: '************1234',
    },
  ],
};

Table.propTypes = {
  titles: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default Table;
