const wordCategories = {
    animals: [
        'TIGER', 'ELEPHANT', 'BLUEWHALE', 'GIRAFFE', 'PENGUIN', 
        'KANGAROO', 'CROCODILE', 'DOLPHIN', 'CHEETAH', 'RHINOCEROS', 
        'HIPPOPOTAMUS', 'LEOPARD', 'GORILLA', 'ZEBRA', 'POLARBEAR', 
        'WOLF', 'FOX', 'DEER', 'SQUIRREL', 'RABBIT'
    ],
    nature: [
        'MOUNTAIN', 'RIVER', 'FOREST', 'DESERT', 'OCEAN', 
        'VOLCANO', 'WATERFALL', 'VALLEY', 'CANYON', 'GLACIER', 
        'TORNADO', 'HURRICANE', 'RAINBOW', 'THUNDER', 'LIGHTNING', 
        'SUNSET', 'SUNRISE', 'MEADOW', 'CAVE', 'LAKE'
    ],
    fruitsVegetables: [
        'APPLE', 'BANANA', 'CARROT', 'TOMATO', 'GRAPE', 
        'ORANGE', 'POTATO', 'CUCUMBER', 'STRAWBERRY', 'BROCCOLI', 
        'PINEAPPLE', 'WATERMELON', 'LETTUCE', 'PEPPER', 'ONION', 
        'MANGO', 'BLUEBERRY', 'PEACH', 'SPINACH', 'CORN'
    ],
    westernFood: [
        'PIZZA', 'BURGER', 'PASTA', 'STEAK', 'SALAD', 
        'SANDWICH', 'FRIES', 'CHICKEN', 'SUSHI', 'TACOS', 
        'PANCAKE', 'WAFFLE', 'SOUP', 'LASAGNA', 'HOTDOG', 
        'DONUT', 'COOKIES', 'CAKE', 'PIE', 'SPAGHETTI'
    ],
    dailyItems: [
        'CHAIR', 'TABLE', 'CLOCK', 'LAMP', 'MIRROR', 
        'SOFA', 'BED', 'PILLOW', 'BLANKET', 'CUP', 
        'PLATE', 'FORK', 'SPOON', 'KNIFE', 'PHONE', 
        'BOOK', 'PEN', 'BAG', 'SHOES', 'WALLET'
    ],
    countries: [
        'CANADA', 'BRAZIL', 'JAPAN', 'FRANCE', 'GERMANY', 
        'ITALY', 'CHINA', 'INDIA', 'RUSSIA', 'AUSTRALIA', 
        'MEXICO', 'SPAIN', 'KOREA', 'EGYPT', 'TURKEY', 
        'SWEDEN', 'NORWAY', 'POLAND', 'GREECE', 'THAILAND'
    ]
};

// default first
let selectedCategory = 'animals';

let currentWord: string;
let guessedLetters: Set<string> = new Set();
const maxGuesses: number = 6;
let wrongGuesses: number = 0;
let wordDisplay: string[];

//-timer
let timeLeft: number = 30;
let timerId: ReturnType<typeof setInterval> | null = null; 

const wordDisplayElement = document.getElementById('word-display') ;
const wrongGuessesElement = document.getElementById('wrong-guesses') ;
const remainingGuessesElement = document.getElementById('remaining-guesses') ;
const winOrRestartElement = document.getElementById('WinOrRestart') ;
const timerElement = document.getElementById('timer') ; //- absicher
const letterButtons = document.querySelectorAll('.letter-btn');
const restartButton = document.getElementById('restart');

const headElement = document.querySelector('.head');

const categorySelect = document.getElementById('category-select');

let isGameStarted = false; // neu f.if started

function getRandomWord(): string {
   
    const words = wordCategories[selectedCategory];
    return words[Math.floor(Math.random() * words.length)];
}

function populateCategorySelect() {
    if (!categorySelect) {
        console.error('Category select element not found in DOM');
        return;
    }
    categorySelect.innerHTML = '';
    Object.keys(wordCategories).forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categorySelect.appendChild(option);
    });
}

function startTimer() {
    // *
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
    
    timeLeft = 30;
    updateTimerDisplay();
    
    timerId = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerId);
            timerId = null;
            endGameDueToTime();
        }
    }, 1000);
}

function updateTimerDisplay() {
    if (timerElement) {
        timerElement.textContent = `Time: ${timeLeft}`;
        // änderung
        if (timerId === null) {
            timerElement.style.color = 'white'; 
        } else if (timeLeft <= 10) {
            timerElement.style.color = 'red';
        } else if (timeLeft <= 20) {
            timerElement.style.color = 'yellow';
        } else {
            timerElement.style.color = 'white';
        }
    }
}

function endGameDueToTime() {
    winOrRestartElement.textContent = `Time up! Das Wort ist ${currentWord}. Klick Start to play again.`;
    winOrRestartElement.classList.add('animated-text');
    disableButtons();
}



function updateDisplay() {
    wordDisplayElement.textContent = wordDisplay.join(' ');
    wrongGuessesElement.textContent = `Falsche Buchstabe: ${Array.from(guessedLetters)
        .filter(letter => !currentWord.includes(letter))
        .join(', ')}`;
    
    const remaining = maxGuesses - wrongGuesses;
    remainingGuessesElement.textContent = `Your Life: ${'❤️'.repeat(remaining)}`;

    
    if (headElement) {
        
        headElement.classList.remove('head', 'head1', 'head2', 'head3', 'head4', 'head5', 'head6');
        
        if (remaining === 6) {
            headElement.classList.add('head');  
        } else if (remaining === 5) {
            headElement.classList.add('head1');
        } else if (remaining === 4) {
            headElement.classList.add('head2');
        } else if (remaining === 3) {
            headElement.classList.add('head3');
        } else if (remaining === 2) {
            headElement.classList.add('head4');
        } else if (remaining === 1) {
            headElement.classList.add('head5');
        } else if (remaining === 0) {
            headElement.classList.add('head6');  
        }
    } else {
        console.error('Head element not found in DOM');
    }
}


function handleGuess(letter: string) {
    if (!isGameStarted || guessedLetters.has(letter) || wrongGuesses >= maxGuesses || timeLeft <= 0) return;

    guessedLetters.add(letter);
    
    if (currentWord.includes(letter)) {
        for (let i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === letter) {
                wordDisplay[i] = letter;
            }
        }
    } else {
        wrongGuesses++;
    }

    updateDisplay();
    checkGameState();
}

function checkGameState() {
    if (wordDisplay.join('') === currentWord) {
        winOrRestartElement.textContent = 'You Win! Klick Start to play again.';
        winOrRestartElement.classList.add('animated-text');
        if (timerId) clearInterval(timerId);
        disableButtons();
    } else if (wrongGuesses >= maxGuesses) {
        winOrRestartElement.textContent = `Game Over! Das Wort ist ${currentWord}. Klick Start to try again.`;
        winOrRestartElement.classList.add('animated-text');
        if (timerId) clearInterval(timerId);
        disableButtons();
    }
}

function disableButtons() {
    letterButtons.forEach(button => button.disabled = true);
}


function resetGame() {
    currentWord = getRandomWord();
    guessedLetters.clear();
    wrongGuesses = 0;
    wordDisplay = Array(currentWord.length).fill('_');
    winOrRestartElement.textContent = '';
    winOrRestartElement.classList.remove('animated-text');
    
    letterButtons.forEach(button => button.disabled = false);
    
    isGameStarted = true;
    startTimer();
    updateDisplay();  
}

function addEventListeners() {
    letterButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleGuess(button.textContent!.trim());
        });
    });

    restartButton.addEventListener('click', resetGame);

    // add select
    if (categorySelect) {
        categorySelect.addEventListener('change', () => {
            selectedCategory = categorySelect.value; 
        });
    }
    document.addEventListener('keydown', (event) => {
        const letter = event.key.toUpperCase();
        if (/^[A-Z]$/.test(letter)) { // nur f. alphabet
            event.preventDefault(); // verbot
            if (isGameStarted) {
                handleGuess(letter);
            }
        }
    });
}

function initializeGame() {

    populateCategorySelect(); // select
    selectedCategory = categorySelect.value; 
    currentWord = getRandomWord();
    wordDisplay = Array(currentWord.length).fill('_');
    
    timeLeft = 30;
    updateTimerDisplay();
    updateDisplay();

    letterButtons.forEach(button => button.disabeled = true)
    isGameStarted = false;

    addEventListeners();
}




document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
});