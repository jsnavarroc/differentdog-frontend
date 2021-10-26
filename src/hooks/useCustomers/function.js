import axios from 'axios';

export const getData = async ({ setData, url }) => {
  setData((prev) => ({ ...prev, loading: true }));
  try {
    const res = await axios.get(url);
    if (res?.data?.data) {
      setData((prev) => ({
        ...prev,
        loading: false,
        data: res?.data?.data,
        status: 201,
      }));
    } else {
      setData((prev) => ({
        ...prev,
        loading: false,
        data: [],
        status: 500,
      }));
    }
  } catch (error) {
    setData((prev) => ({
      ...prev,
      loading: false,
      data: [],
      status: 500,
    }));
  }
};
