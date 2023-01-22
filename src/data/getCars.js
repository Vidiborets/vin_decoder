import axios from 'axios';
axios.defaults.baseURL = 'https://vpic.nhtsa.dot.gov/api/';
export const getCarsByVinCode = async value => {
  const res = await axios.get(`/vehicles/DecodeVin/${value}?format=json`);
  return res.data;
};

export const getVariables = async () => {
  const res = await axios.get('/vehicles/getvehiclevariablelist?format=json');
  return res.data;
};
getVariables().then(res => {
  getArray([...res.Results]);
});
const data = [];
const getArray = res => {
  data.push(...res);
};
export const getVariableById = custemrsId => {
  return Promise.resolve(data.find(({ ID }) => ID === custemrsId));
};
