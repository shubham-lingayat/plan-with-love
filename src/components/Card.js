import React, { useState } from "react";

function Card({ id, name, info, image, price, removeCard }) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}....`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} alt={name} className="image" />
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          {description}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? `show less` : `read more`}
          </span>
        </div>
      </div>
      <button className="red-btn " onClick={() => removeCard(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
