//global variables

let game = new Game();
const btnReset = document.getElementById('btn__reset');
const Ul = document.querySelector('#phrase ul');
const qwerty = document.getElementById('qwerty');
const lives = document.querySelectorAll('.tries img');
const key = document.getElementsByClassName('key');

//start game event listener

btnReset.addEventListener('click', () => {
    game.reset();
    game.startGame();
});

// button listener

qwerty.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
});

// keyboard listener 

document.addEventListener('keyup', (e) => {
    for (let btn of key) {
        if (btn.innerHTML === e.key) {
            game.handleInteraction(btn);
        }
    }
})