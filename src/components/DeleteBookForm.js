const App = () => {
    const [books, setBooks] = React.useState(initialBooks); // initialBooks is your books array
  
    const deleteBook = (bookId) => {
      const updatedBooks = books.filter((book) => book.id !== bookId);
      setBooks(updatedBooks);
    };
  
    return (
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} deleteBook={deleteBook} />
        ))}
      </div>
    );
  };
  