/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// new class

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        this.phraseCharArr = [];
        this.phraseUl = document.getElementById('phrase').getElementsByTagName('ul')[0];
        this.letterMatchArr = [];
    }
    addPhraseToDisplay() {
        for (let i = 0; i < this.phrase.length; i++) {
            let li = document.createElement('li');
            if (this.phrase[i] === ' ') {
                li.classList.add('space');
            } else {
                li.classList.add('hide');
                li.classList.add('letter');
                li.classList.add(`${this.phrase[i]}`);
                li.innerText = `${this.phrase[i]}`;
                this.phraseCharArr.push(this.phrase[i]);
                console.log(this.phraseCharArr);
            }
            this.phraseUl.appendChild(li);
        }
    }
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        for (let i = 0; i < Ul.children.length; i++) {
            const char = Ul.children[i];
            if (char.innerHTML === letter) {
                char.classList.remove('hide');
                char.classList.add('show');
            }
        }
    }
}

