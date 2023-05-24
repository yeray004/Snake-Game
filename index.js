import { SNAKE_SPEED, update as updateSnake, draw as drawSnake } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";


let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board')

function main(currentTime){
    window.requestAnimationFrame(main); //Tells the broser when can render the next frame, no matter what
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
}

function draw(){
    gameBoard.innerHTML = '' //We remove the previous pieces
    drawSnake(gameBoard);
    drawFood(gameBoard);
}