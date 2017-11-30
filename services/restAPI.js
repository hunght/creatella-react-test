// services are state-less
// they act as utility facades that abstract the details for complex operations
// normally, our interface to any sort of server API will be as a service

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
