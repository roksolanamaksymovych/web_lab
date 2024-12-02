import axios from 'axios';


const API_BASE_URL = 'http://localhost:3000/api/perfumes';


export const fetchPerfumes = async (filters = {}) => {
  try {
    const response = await axios.get(API_BASE_URL, { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching perfumes:', error);
    throw error;
  }
};

export const fetchPerfumeById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching perfume with ID ${id}:`, error);
    throw error;
  }
};
