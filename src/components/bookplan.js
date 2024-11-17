import "../styles/bookplan.css";

const booksPlan = (booksPlan) => {
const imageSrc = `https://my-library-backend-scms.onrender.com/api/books`;
    return (
        <section className="house-plan columns">
            <section className="feature-image">
            <img src={imageSrc} alt={booksPlan.name} />
            </section>
            <h3>{booksPlan.name}</h3>
            <p>
                {booksPlan.features.map((feature) => {
                    console.log('feature: ' + feature);
                    return feature + ", ";
                })}
            </p>
        </section>
    );
};

export default booksPlan;
