import { cache } from 'react';

const data = require('./data.json');

export const revalidate = 3600;

export const getItem = cache(() => {
  console.log('fetching data...');

  return data;
});
