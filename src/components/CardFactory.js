import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import Card from './Card';
import one from '../img/one.png';
import two from '../img/two.jpeg';
import three from '../img/three.png';
import four from '../img/four.jpeg';
import five from '../img/five.jpeg';
import six from '../img/six.jpeg';
import seven from '../img/seven.jpeg';
import eight from '../img/eight.jpeg';
import nine from '../img/nine.jpeg';
import ten from '../img/ten.png';

const initial = [
  { imageSrc: one, imageName: 1, clicked: 'false' }, //start at 0
  { imageSrc: two, imageName: 2, clicked: 'false' },
  { imageSrc: three, imageName: 3, clicked: 'false' },
  { imageSrc: four, imageName: 4, clicked: 'false' },
  { imageSrc: five, imageName: 5, clicked: 'false' },
  { imageSrc: six, imageName: 6, clicked: 'false' },
  { imageSrc: seven, imageName: 7, clicked: 'false' },
  { imageSrc: eight, imageName: 8, clicked: 'false' },
  { imageSrc: nine, imageName: 9, clicked: 'false' },
  { imageSrc: ten, imageName: 10, clicked: 'false' },
];

const CardFactory = () => {
  const [images, setImage] = useState(initial);

  useEffect(() => {
    const newCards = [...images];
    setImage(newCards);
  }, []);

  const handleClick = (e) => {
    const chosen = e.target.getAttribute('data-chosen');
    const imageName = e.target.getAttribute('data-image-name');
    console.log(chosen);
    console.log(imageName);
    console.log(images[imageName]);
    e.preventDefault();
    setImage({
      ...images,
      [images[imageName]]: (images[imageName].clicked = true),
    });
  };

  let cards = images.map((item) => {
    return (
      <Card
        click={handleClick}
        hasClicked={item.clicked}
        key={uniqid()}
        image={item.imageSrc}
        imageName={item.imageName}
      />
    );
  });

  //
  return <div className="factory">{cards}</div>;
};

export default CardFactory;
