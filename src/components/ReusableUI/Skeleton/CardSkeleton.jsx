import React from "react";

const CardSkeleton = () => {
  return (
    <div className="cardSkeleton">
      <div className="card-divider"></div>
      <div className="card-body">
        <div className="card-footer">
          <p className="card-price"></p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
