import "../styles/bookplan.css";

const bookPlan = (bookPlan) => {
const imageSrc = `https://server-js-81l8.onrender.com/api/books/images/${bookPlan.main_image}`;
    return (
        <section className="house-plan columns">
            <section className="feature-image">
            <img src={imageSrc} alt={bookPlan.name} />
            </section>
            <h3>{bookPlan.name}</h3>
            <p>
                {bookPlan.features.map((feature) => {
                    return feature + ", ";
                })}
            </p>
        </section>
    );
};

export default bookPlan;