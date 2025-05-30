import axios from 'axios';

const API_URL = 'trposite-production.up.railway.app';

export const solveEquation = async (equation, variable = 'x') => {
  const response = await axios.post(`${API_URL}/solve`, {
    equation,
    variable
  });
  return response.data;
};

export const getHistory = async () => {
  const response = await axios.get(`${API_URL}/history`);
  return response.data;
};

