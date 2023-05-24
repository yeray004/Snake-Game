let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }


function up(){
    if(lastInputDirection.y !== 0){
        return;
    } else{
        inputDirection = { x: 0, y: -1 }
    }
}
function down(){
    if(lastInputDirection.y !== 0){
        return;
    } else{
        inputDirection = { x: 0, y: 1 }
    }
}
function left(){
    if(lastInputDirection.x !== 0){
        return;
    } else{
        inputDirection = { x: -1, y: 0 }
    }
}
function right(){
    if(lastInputDirection.x !== 0){
        return;
    } else{
        inputDirection = { x: 1, y: 0 }
    }
}

document.getElementById('btnUp').addEventListener('click', up);
document.getElementById('btnDown').addEventListener('click', down); 
document.getElementById('btnLeft').addEventListener('click', left);
document.getElementById('btnRight').addEventListener('click', right);

window.addEventListener('keydown', e => {
    switch(e.key){
        case 'ArrowUp':
            up(); break;
        case 'ArrowDown':
            down(); break;
        case 'ArrowLeft':
            left(); break;
        case 'ArrowRight':
            right(); break;
    }
})

export function getInputDirection(){
    lastInputDirection = inputDirection
    return inputDirection
}