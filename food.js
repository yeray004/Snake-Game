import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition();
let EXPANSION_RATE = 1;

export function update(){
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition();
    }
}

export function draw(gameBoard){ //we pass the gameboard to draw or snake inside
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y //we flipped the direction to move correctly
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition(){
    let newFoodPosition
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition
}