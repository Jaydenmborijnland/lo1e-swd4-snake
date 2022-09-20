const canvas = document.getElementById("snake");
const ctx = canvas.getContext('2d');
let snakeX = 200;
let snakeY = 200;
let direction = null;

function drawBackground() {
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, 400, 400);
}
function drawSnake() {
ctx.fillStyle = 'white';
ctx.fillRect(snakeX, snakeY, 20, 20);
}

function update() {
if(direction == 'right') {
    if (snakeX < 380) {
        snakeX += 20;
    } else {
        gameOver();
    }
} else if (direction == 'left') {
    if (snakeX > 0) {
        snakeX -= 20;
    } else {
        gameOver();
    }
} else if (direction == "up"){
    if(snakeY > 0) {
        snakeY -= 20;
    } else {
        gameOver();
    }

} else if(direction == "down") {
    if (snakeY < 380) {
        snakeY += 20;
    } else {
        gameOver();
    }
}



    drawBackground();
    drawSnake();
}

function ChangeDirection(event){
    if(event.code == "ArrowUp") {
        direction = "up";
    } else if (event.code == "ArrowRight"){
     direction = "right";
    } else if (event.code == "ArrowLeft"){
        direction = "left";

    } else if (event.code == "ArrowDown"){
        direction = "down";

    }
}
function gameOver() {
    direction = null;
    alert("Game Over");
}



drawBackground();
drawSnake();
setInterval(update, 500);
addEventListener('keydown', ChangeDirection);