'use strict';

var leftBoxes = document.getElementsByClassName('left');
var rightBoxes = document.getElementsByClassName('right');

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

//Event Listener for Left Fortune Boxes

for (var i = 0; i < leftBoxes.length; i++) {
  leftBoxes[i].addEventListener('click', loopThroughLeft);
};

//Event Listener for Right Fortune Boxes

for (var _i = 0; _i < rightBoxes.length; _i++) {
  rightBoxes[_i].addEventListener('click', loopThroughRight);
};