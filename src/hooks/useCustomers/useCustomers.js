import { useEffect, useState } from 'react';
import { getData } from './function';

const useCustomers = () => {
  const [data, setData] = useState({
    loading: false,
    error: '',
    data: [],
    status: 0,
  });
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    getData({
      setData,
      url: 'http://localhost:4200/v1/customers',
    });
  }, []);

  useEffect(() => {
    if (data.data) {
      const customersFormatData = data.data.map((customer) => ({
        id: customer?.customer?.id ?? "Doesn't have",
        first_name: customer?.customer?.first_name ?? "Doesn't have",
        last_name: customer?.customer?.last_name || "Doesn't have",
        email: customer?.customer?.email ?? "Doesn't have",
        masked_number: customer?.card?.masked_number ?? "Doesn't have",
      }));
      setCustomers(customersFormatData);
    }
  }, [data]);

  return {
    dataCutomers: {
      titles: ['id', 'Name', 'Lastname', 'Email', 'Number Card'],
      data: customers,
    },
    loading: data.loading,
    error: data.error,
    status: data.status,
  };
};

export default useCustomers;
