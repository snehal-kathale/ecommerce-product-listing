import "./Card.css";
import Rating from "../Rating/Rating";

const Card = ({ product, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="card-divider"></div>
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <div className="card-footer">
          <p className="card-price">${product.price}</p>
          <Rating rating={product.rating} />
        </div>
      </div>
    </div>
  );
};

export default Card;
