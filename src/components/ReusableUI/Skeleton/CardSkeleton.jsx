import "./CardSkeleton.css";

const CardSkeleton = () => {
  return (
    <div className="cardSkeleton">
      <div className="card-image-skeleton"></div>
      <div className="card-divider-skeleton"></div>
      <div className="card-body-skeleton">
        <h3 className="card-title-skeleton"></h3>
        <div className="card-footer-skeleton">
          <h3 className="card-price-skeleton"></h3>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
