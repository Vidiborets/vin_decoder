import { Box } from 'components/Box/Box';
import { useState, useEffect } from 'react';
import { getCarsByVinCode } from 'data/getCars';
import { ListSearch } from 'components/ListSearch/ListSearch';
import { Hero } from 'components/Hero/Hero';
import { ListItem } from 'components/ListItem/ListItem';
import { About } from 'components/About/About';
export const Customers = () => {
  const [car, setCar] = useState([]);
  const [searchParams, setSearchParams] = useState('');
  const [vinList, setVinList] = useState([]);
  const [message, setMessage] = useState('');
  const addItemList = value => {
    const dublicateContact = vinList.find(item => item === value);
    if (dublicateContact) {
      return;
    }
    setVinList(prevList => [...prevList, value]);
  };
  const handleSubmit = value => {
    setSearchParams(value);
    addItemList(value);
  };
  const handleSubmitByLink = item => {
    if (searchParams === item) {
      return;
    }
    setSearchParams(item);
  };
  useEffect(() => {
    if (!searchParams) {
      return;
    }
    getCarsByVinCode(searchParams).then(res => {
      setCar(res);
      setMessage(res.Message);
    });
  }, [searchParams]);
  const visibleCar = car.Results;
  return (
    <Box as="main">
      <Hero onSubmit={handleSubmit} />
      <About message={message} />
      <ListSearch value={vinList} onSubmit={handleSubmitByLink} />
      <ListItem visibleCar={visibleCar} />
    </Box>
  );
};
