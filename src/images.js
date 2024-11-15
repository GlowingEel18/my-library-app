import book1 from "../images/book1.jpg";
import book2 from "../images/book2.jpg";
// Import other images as needed

const images = {
  "Book Title 1": book1,
  "Book Title 2": book2,
  // Map other book titles to images
};

<GenreCard
  key={book.name}
  title={book.name}
  image={images[book.name] || book.main_image} // Use local image if available, otherwise use main_image from API
  description={`Size: ${book.size} sq. ft. | Bedrooms: ${book.bedrooms} | Bathrooms: ${book.bathrooms}`}
  features={book.features.join(", ")}
/>


export default images;
