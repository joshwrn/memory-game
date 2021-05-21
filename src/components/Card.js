import React from 'react';

const Card = ({ image, click, hasClicked, imageName, animation }) => {
  return (
    <div
      data-chosen={hasClicked}
      data-image-name={imageName}
      id={imageName}
      onClick={click}
      className="card"
      style={animation}
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
