import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getBooks = () => api.get("/books");
export const addBook = (bookData) => api.post("/books", bookData);
export const deleteBook = (id) => api.delete(`/books/${id}`);
export const updateBook = (id, bookData) => api.put(`/books/${id}`, bookData);

export default api;
