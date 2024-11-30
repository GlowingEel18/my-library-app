export const deleteBook = async (bookId) => {
  try {
    const response = await fetch(
      `https://my-library-backend-latest.onrender.com/api/books/${bookId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to delete book: ${response.statusText}`);
    }

    return response;
  } catch (error) {
    console.error("Error in deleteBook API:", error);
    throw error;
  }
};
