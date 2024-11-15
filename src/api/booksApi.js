// client/src/api/booksApi.js
import axios from 'axios';

const API_URL = 'https://my-library-backend-scms.onrender.com/api/books';

export const fetchBooks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const addBook = async (book) => {
  try {
    const response = await axios.post(API_URL, book);
    return response.data;
  } catch (error) {
    console.error("Error adding book:", error);
    throw error;
  }
};
