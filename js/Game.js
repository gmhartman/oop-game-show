// variables

const overlay = document.getElementById('overlay');

// new class

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('you are a winner'),
            new Phrase('take a wild guess'),
            new Phrase('does this work yet'),
            new Phrase('give it another shot'),
            new Phrase('best treehouse project ever')
        ];
        this.activePhrase = null;
    }
    startGame() {
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * 5)];
    }
    handleInteraction(btn) {
        btn.disabled = true;
        if (this.activePhrase.checkLetter(btn.innerHTML)) {
            btn.classList.add('chosen');
            this.activePhrase.showMatchedLetter(btn.innerHTML);
            this.checkForWin();
        } else {
            btn.classList.add('wrong');
            this.removeLife();
        }
    }
    checkForWin() {
        const letters = document.getElementsByClassName('letter');
        let rightLetters = 0;
        for (let i = 0; i < letters.length; i++) {
            const e = letters[i];
            if (e.classList.contains('show')) {
                rightLetters++;
            }
        } if (rightLetters === letters.length) {
            this.gameOver(true);
        }
    }
    removeLife() {
        lives[lives.length - 1 - this.missed].src = 'images/lostHeart.png';
        this.missed++;
        if (this.missed === 5) {
            this.gameOver('lose');
        }
    }
    gameOver(result) {
        const message = document.getElementById('game-over-message');
        overlay.style.display = 'block';
        if (result === true ) {
            message.innerHTML = "You Win!";
            overlay.classList.add('win');
        } else {
            message.innerHTML = 'You Lose. Try Again!';
            overlay.classList.add('lose');
        } 
    }
    reset = () => {
        const phraseElement = document.getElementById('phrase');
        const phraseChildren = phraseElement.children;
        let letterHTML = phraseChildren[0];
        letterHTML.innerHTML = '';
        for (let i = 0; i < key.length; i++) {
            key[i].disabled = false;
            key[i].className = 'key';
        }
        const heart = document.getElementsByTagName('img');
        for (let i = 0; i < heart.length; i++) {
            heart[i].src = 'images/liveHeart.png';
        }
    }
}