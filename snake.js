export const SNAKE_SPEED = 1;
const snakeBody = [
    { x: 10, y: 11 },
    { x: 11, y: 11 },
    { x: 12, y: 11 }
]

export function update(){
    for(let i = snakeBody.length - 2; i >= 0; i--){ //From second to last element
        snakeBody[i + 1] = { ...snakeBody[i] } //Last element | to current element as a new object
    }
    
/*     snakeBody[0].x += 0
    snakeBody[0].y += 1 */
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