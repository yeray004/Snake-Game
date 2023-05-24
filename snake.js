import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5;
const snakeBody = [{ x: 11, y: 11 }]
let newSegments = 0;

export function update(){
    addSegments();
    const inputDirection = getInputDirection();
    for(let i = snakeBody.length - 2; i >= 0; i--){ //From second to last element
        snakeBody[i + 1] = { ...snakeBody[i] } //Last element | to current element as a new object
    }
    
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard){ //we pass the gameboard to draw or snake inside
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y //we flipped the direction to move correctly
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount){
    newSegments += amount
}

export function onSnake(position){
    return snakeBody.some(segment => {
        return equalPositions(segment, position)
    })
}

function equalPositions(pos1, pos2){
    return pos1.x === pos2.x && pos1.y == pos2.y
}

function addSegments(){
    for(let i = 0; i < newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length -1] })
    }

    newSegments = 0;
}
