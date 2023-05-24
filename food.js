import { onSnake, expandSnake } from "./snake.js";

let food = { x: 10, y: 1 };
let EXPANSION_RATE = 1;

export function update(){
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food = { x: 20, y: 2 }
    }
}

export function draw(gameBoard){ //we pass the gameboard to draw or snake inside
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y //we flipped the direction to move correctly
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}