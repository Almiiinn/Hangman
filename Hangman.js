// array of words
const randomWordsArr = ["Programmering", "Stockholm", "Studenter", "Javascript", "Afterwork","Kobas"];

// picks a random word from the array above
const randomWord = randomWordsArr[Math.floor(Math.random() * randomWordsArr.length)].toLowerCase();

const guessArray = [];

let count = 5;

// shows how many letters there are in a word usin underscores
const answerArray = [];
for (let i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";
}

//constiable that tells how many letters are left to be guessed
let remainingLetters = randomWord.length;

//***********THE MAIN GAME LOOP***********//

while(remainingLetters > 0 ) {
    //show the user their progress

    //get a guess from the user
    const guess = prompt(answerArray.join ("  ") + "\n \n Lives left: " + count).toLowerCase();

    //if letter is already chosen
    if (guessArray.includes(guess)) {
        alert("Letter already chosen!");
        continue;
}
guessArray.push(guess);

//if the guess is blank
if (guess == null) {
    //exit the game loop
    break;
    //if the guess is more than 1 letter or no letters
} else if (guess.length !== 1) {
    //alert the user to guess a single letter onlyﬂ
    alert ("Please enter a single letter!");

} else if (!randomWord.includes(guess)) {
    count--;

}
else {
    //update the game state with the guess
    for (let j = 0; j < randomWord.length; j++) {
        //if the letter they guessed is in the word at that point or index
        if (randomWord [j] === guess) {
            //update the anser array with the letter the user guessed at that pint or index
            answerArray [j] = guess;
            //subtract one from remaining letters
            remainingLetters--;
        }
    }
        
    }

    //if number of lives is equal to zero, alert failure message and the right word
    if (count === 0) {
        alert("You have lost! The correct anser was: " + randomWord);
        exit();
    }

    //***************END OF THE MAIN GAME LOOP***************//

}

//congratulate the player
alert ("Congratulations, the anser was correct!");