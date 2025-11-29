const words = [
    { word: "HIRENDRA SIR", hint:"Teacher of web tech ai/ml :)"},
    { word: "ARYAN", hint:"student of itm university :)"},
    { word: "APPLE", hint: "A fruit that keeps doctors away :)" },
    { word: "HTML", hint:"Hyper text mark up language :)"},
    { word:"CSS", hint:"Cascading style sheet :)"},
    { word: "JAVASCRIPT", hint: "The programming language used here :)" },
    
];

let selectedWord, displayedWord, wrongLetters;

function startGame() {
    let random = Math.floor(Math.random() * words.length);
    selectedWord = words[random].word;
    document.getElementById("hint").textContent = "Hint: " + words[random].hint;

    displayedWord = Array(selectedWord.length).fill("_");
    wrongLetters = [];

    updateDisplay();
}

function updateDisplay() {
    document.getElementById("wordDisplay").textContent = displayedWord.join(" ");
    document.getElementById("wrongGuesses").textContent = wrongLetters.join(", ");
}

function checkLetter() {
    let letter = document.getElementById("letterInput").value.toUpperCase();
    document.getElementById("letterInput").value = "";

    if (!letter.match(/[A-Z]/)) {
        alert("Enter a valid letter!");
        return;
    }

    if (displayedWord.includes(letter) || wrongLetters.includes(letter)) {
        document.getElementById("message").textContent = "You already guessed that!";
        return;
    }

    let correct = false;

    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === letter) {
            displayedWord[i] = letter;
            correct = true;
        }
    }

    if (!correct) wrongLetters.push(letter);

    updateDisplay();
    checkWin();
}

function checkWin() {
    if (!displayedWord.includes("_")) {
        document.getElementById("message").textContent = "🎉 😍Congratulations! You guessed the correct word!💕";
    }
}

function restartGame() {
    document.getElementById("message").textContent = "";
    startGame();
}

startGame();
