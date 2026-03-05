import "./Rating.css";

const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push("full");
    } else if (i - rating < 1) {
      stars.push("half");
    } else {
      stars.push("empty");
    }
  }

  return (
    <div className="rating">
      {stars.map((type, index) => (
        <span key={index} className={`star ${type}`}>
          ★
        </span>
      ))}
      <span className="rating-value">({rating})</span>
    </div>
  );
};

export default Rating;
