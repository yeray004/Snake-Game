let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }
/* document.getElementById('btnLeft').addEventListener('click', moveLeft);
document.getElementById('btnRigth').addEventListener('click', moveRight);
document.getElementById('btnUp').addEventListener('click', rotate);
document.getElementById('btnDown').addEventListener('click', moveDown);  */

window.addEventListener('keydown', e => {
    switch(e.key){
        case 'ArrowUp':
            if(lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            break;
        case 'ArrowDown':
            if(lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break;
        case 'ArrowLeft':
            if(lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break;
        case 'ArrowRight':
            if(lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break;
    }
})

export function getInputDirection(){
    lastInputDirection = inputDirection
    return inputDirection
}