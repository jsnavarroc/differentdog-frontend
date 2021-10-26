import React from 'react';
import { useCustomers } from '../../hooks/index';
import { Table, SpinerSkeleton, AlertError } from '../../components/commons';

const CustomersPage = () => {
  const { dataCutomers, loading, error, status } = useCustomers();
  if (loading || status === 0) return <SpinerSkeleton />;
  if (status === 500) return <AlertError error={error} />;
  if (status === 201) return <Table {...dataCutomers} />;
};

export default CustomersPage;
