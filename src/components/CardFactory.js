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

let initial = [
  { imageSrc: one, imageName: 0, clicked: false },
  { imageSrc: two, imageName: 1, clicked: false },
  { imageSrc: three, imageName: 2, clicked: false },
  { imageSrc: four, imageName: 3, clicked: false },
  { imageSrc: five, imageName: 4, clicked: false },
  { imageSrc: six, imageName: 5, clicked: false },
  { imageSrc: seven, imageName: 6, clicked: false },
  { imageSrc: eight, imageName: 7, clicked: false },
  { imageSrc: nine, imageName: 8, clicked: false },
  { imageSrc: ten, imageName: 9, clicked: false },
];

const CardFactory = () => {
  const [images, setImage] = useState(initial);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  //+ add score
  function increment() {
    setScore((prevCount) => prevCount + 1);
  }

  //+reset score
  function reset() {
    setScore((prevCount) => prevCount - prevCount);
  }

  function updateHighScore() {
    if (score + 1 > highScore) {
      setHighScore((prevCount) => prevCount + 1);
    }
  }

  //+ Randomize array in-place using Durstenfeld shuffle algorithm */
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  //? click
  const handleClick = (e) => {
    e.preventDefault();
    //+ elements
    const chosen = e.target.getAttribute('data-chosen');
    const imageNameAtt = e.target.getAttribute('data-image-name');
    //+ get image index
    const findImage = images.findIndex(
      (image) => image.imageName === Number(imageNameAtt)
    );
    if (images[findImage].clicked === false) {
      //+ set images with the correct index
      setImage((old) => [...old], {
        [images[findImage]]: (images[findImage].clicked = true),
      });
      //+ set high score
      updateHighScore();
      //+ set current score
      increment();
      //+ shuffle cards
      setImage((old) => [...old], shuffleArray(images));
    } else {
      //+ reset clicked status
      setImage(
        (old) => [...old],
        images.forEach((image) => {
          {
            image.clicked = false;
          }
        })
      );
      reset();
    }
    console.log(images);
  };

  //? create cards
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
  return (
    <div>
      <h1>High Score: {highScore}</h1>
      <h1>Current Score: {score}</h1>
      <div className="factory">{cards}</div>
    </div>
  );
};

export default CardFactory;
