const leftBoxes = document.getElementsByClassName('left')
const rightBoxes = document.getElementsByClassName('right')

//Left Fortune Boxes
function loopThroughLeft() {

  const fortuneTransition = () => this.classList.toggle('scale-down-center');
  const fortuneTransitionTwo = () => this.classList.toggle('slide-left')

  for(let i = 0; i < this.textContent.length * 2; i++) {
    if([0, 1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21, 24, 25, 28, 29, 32, 33].indexOf(i) > -1) {
      setTimeout(fortuneTransition, i * 1000);
    } else {
      setTimeout(fortuneTransitionTwo, i * 1000);
    }
  };
};

//Right Fortune Boxes
function loopThroughRight() {

  const fortuneTransitionThree = () => this.classList.toggle('scale-down-center');
  const fortuneTransitionFour = () => this.classList.toggle('slide-right')

  for(let i = 0; i < this.textContent.length * 2; i++) {
    if([0, 1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21, 24, 25, 28, 29, 32, 33].indexOf(i) > -1) {
      setTimeout(fortuneTransitionThree, i * 1000);
    } else {
      setTimeout(fortuneTransitionFour, i * 1000);
    }
  };
};

//Event Listener for Left Fortune Boxes

for(let i = 0; i < leftBoxes.length; i++) {
  leftBoxes[i].addEventListener('click', loopThroughLeft);
};

//Event Listener for Right Fortune Boxes

for(let i = 0; i < rightBoxes.length; i++) {
  rightBoxes[i].addEventListener('click', loopThroughRight);
};
