// services are state-less
// they act as utility facades that abstract the details for complex operations
// normally, our interface to any sort of server API will be as a service

import { contains } from 'ramda';
const BaseURL = 'http://localhost:3000';

export const getEmotionsAPI = async ({ page, limit = '10' }) => {
  const url = `${BaseURL}/api/products?_page=${page}&_limit=${limit}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error(
      ` Service getEmotionsAPI failed, HTTP status ${response.status}`,
    );
  }
  const data = response.json();
  return data;
};

let adManager = [];
const getRamdomNotRepeat = () => {
  let number = Math.floor(Math.random() * 1000);
  let count = 0;
  while (contains(number, adManager) && count < 1000) {
    count++;
    number = Math.floor(Math.random() * 1000);
  }
  adManager.push(number);
  return number;
};

export const getImageSourceAdd = () =>
  `${BaseURL}/ads/?r=${getRamdomNotRepeat()}`;
