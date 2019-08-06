'use strict';

var leftBoxes = document.getElementsByClassName('left');
var rightBoxes = document.getElementsByClassName('right');
var firstBoxes = document.getElementsByClassName('first');
var secondBoxes = document.getElementsByClassName('second');
var thirdBoxes = document.getElementsByClassName('third');
var myBoxes = document.getElementsByClassName('block');

//Left Fortune Boxes
function loopThroughLeft() {
  var _this = this;

  var fortuneTransition = function fortuneTransition() {
    return _this.classList.toggle('scale-down-center');
  };
  var fortuneTransitionTwo = function fortuneTransitionTwo() {
    return _this.classList.toggle('slide-left');
  };

  for (var i = 0; i < this.textContent.length * 2; i++) {
    if ([0, 1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21, 24, 25, 28, 29, 32, 33].indexOf(i) > -1) {
      setTimeout(fortuneTransition, i * 500);
    } else {
      setTimeout(fortuneTransitionTwo, i * 500);
    }
  };
};

//Right Fortune Boxes
function loopThroughRight() {
  var _this2 = this;

  var fortuneTransitionThree = function fortuneTransitionThree() {
    return _this2.classList.toggle('scale-down-center');
  };
  var fortuneTransitionFour = function fortuneTransitionFour() {
    return _this2.classList.toggle('slide-right');
  };

  for (var i = 0; i < this.textContent.length * 2; i++) {
    if ([0, 1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21, 24, 25, 28, 29, 32, 33].indexOf(i) > -1) {
      setTimeout(fortuneTransitionThree, i * 500);
    } else {
      setTimeout(fortuneTransitionFour, i * 500);
    }
  };
};

//box change
function boxChange() {
  var change = function change() {
    for (var i = 0; i < leftBoxes.length; i++) {
      firstBoxes[i].classList.add('hide');
      secondBoxes[i].classList.remove('hide');
    }
  };
  setTimeout(change, this.textContent.length * 1000);
};

function boxChangeTwo() {
  var changeTwo = function changeTwo() {
    for (var i = 0; i < myBoxes.length; i++) {
      secondBoxes[i].classList.add('hide');
      thirdBoxes[i].classList.remove('hide');
    }
  };
  setTimeout(changeTwo, this.textContent.length * 1000);
};

//Event Listeners

for (var i = 0; i < firstBoxes.length; i++) {
  firstBoxes[i].addEventListener('click', boxChange);
};

for (var _i = 0; _i < secondBoxes.length; _i++) {
  secondBoxes[_i].addEventListener('click', boxChangeTwo);
};

for (var _i2 = 0; _i2 < leftBoxes.length; _i2++) {
  leftBoxes[_i2].addEventListener('click', loopThroughLeft);
};

for (var _i3 = 0; _i3 < rightBoxes.length; _i3++) {
  rightBoxes[_i3].addEventListener('click', loopThroughRight);
};

//Fortunes
/*const messageWrapper = document.getElementById('fortune');

const messageItems = ['You look like you need a treat!', 'The fortune you seek is in another cookie.', 'Oops... cant think of anything, try again later.', 'I foresee lots of pets in your future.', 'Youre a good dog.', 'Your lucky numbers are 6, 42, 8, 27, 24, 56', 'You look like Charlie needs a treat', 'Laugh long, loud and often, and with a dog.', 'Stay positive and give treats to others.', 'Cherish your loved ones.'];

const messageSection = document.querySelector('section.hide');

const getRandomMessage = function () {
  messageItems.sort(() => 0.5 - Math.random());
  return messageItems[0];
};

function displayMessage() {
  messageWrapper.innerHTML = getRandomMessage();
  messageSection.classList.remove('hide');
  messageSection.classList.add('message');
}*/