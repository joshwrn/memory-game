import React from 'react';

const Card = ({ image, click, hasClicked, imageName }) => {
  return (
    <div
      data-chosen={hasClicked}
      data-image-name={imageName}
      onClick={click}
      className="card"
    >
      <img
        data-chosen={hasClicked}
        data-image-name={imageName}
        className="card-image"
        src={image}
        alt="card"
      ></img>
    </div>
  );
};

export default Card;
