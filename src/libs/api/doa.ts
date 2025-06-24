import axios from 'axios';

export const getAllDoa = async () => {
  const result = await axios.get('/api/doa');
  return result.data;
};

