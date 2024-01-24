let player = document.getElementById('player');

const moveSize = 5;
let movementCount = 10;

function updatePosition(top, left) {
 if(top < 0 || top > 900 || left < 0 || left > 800) {
    return;
 }
 player.style.top = top + 'px';
 player.style.left = left + 'px';
  }



function updateDirection(direction) {
 movementCount++;
 let img = movementCount % 2; 
 console.log(img)
 player.style.backgroundImage = 'url(img/' + direction + '.png';
 if (img == 0) {

 } else {
    player.style.backgroundImage = 'url(img/' + direction + img + '.png';

 }   
}


function moveUp() {
 updatePosition(player.offsetTop - moveSize, player.offsetLeft);
 updateDirection('back');
}

function moveRight() {
 updatePosition(player.offsetTop, player.offsetLeft + moveSize);
 updateDirection('right');
}

function moveDown() {
 updatePosition(player.offsetTop + moveSize, player.offsetLeft);
 updateDirection('face');
}

function moveLeft() {
 updatePosition(player.offsetTop, player.offsetLeft - moveSize);
 updateDirection('left');
}


document.addEventListener('keydown', (event) => {
 switch (event.key) {
    case 'ArrowUp':
      moveUp();
      break;
    case 'ArrowRight':
      moveRight();
      break;
    case 'ArrowDown':
      moveDown();
      break;
    case 'ArrowLeft':
      moveLeft();
      break;

 }
});