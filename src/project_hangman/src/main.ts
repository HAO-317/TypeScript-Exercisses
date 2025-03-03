// Version 1.15 - Fixed syntax error in fruitsVegetables array

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
} as const;

type Category = keyof typeof wordCategories;
let selectedCategory: Category = 'animals';
let currentWord: string = '';
let guessedLetters: Set<string> = new Set();
const maxGuesses: number = 6;
let wrongGuesses: number = 0;
let wordDisplay: string[] = [];
let timeLeft: number = 30;
let timerId: number | null = null;

const wordDisplayElement: HTMLElement | null = document.getElementById('word-display');
const wrongGuessesElement: HTMLElement | null = document.getElementById('wrong-guesses');
const remainingGuessesElement: HTMLElement | null = document.getElementById('remaining-guesses');
const winOrRestartElement: HTMLElement | null = document.getElementById('WinOrRestart');
const timerElement: HTMLElement | null = document.getElementById('timer');
const letterButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.letter-btn');
const restartButton: HTMLButtonElement | null = document.getElementById('restart') as HTMLButtonElement | null;
const headElement: HTMLElement | null = document.querySelector('.head');
const categorySelect: HTMLSelectElement | null = document.getElementById('category-select') as HTMLSelectElement | null;
let isGameStarted: boolean = false;

function getRandomWord(): string {
    const words: readonly string[] = wordCategories[selectedCategory];
    return words[Math.floor(Math.random() * words.length)];
}

function populateCategorySelect(): void {
    if (!categorySelect) {
        console.error('Category select element not found in DOM');
        return;
    }
    categorySelect.innerHTML = '';
    (Object.keys(wordCategories) as Category[]).forEach(category => {
        const option: HTMLOptionElement = document.createElement('option');
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categorySelect.appendChild(option);
    });
}

function startTimer(): void {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timeLeft = 30;
    updateTimerDisplay();
    timerId = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            if (timerId !== null) {
                clearInterval(timerId);
                timerId = null;
            }
            endGameDueToTime();
        }
    }, 1000);
}

function updateTimerDisplay(): void {
    if (timerElement) {
        timerElement.textContent = `Time: ${timeLeft}`;
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

function endGameDueToTime(): void {
    if (winOrRestartElement) {
        winOrRestartElement.textContent = `Time up! Das Wort ist ${currentWord}. Klick Start to play again.`;
        winOrRestartElement.classList.add('animated-text');
    }
    disableButtons();
}

function updateDisplay(): void {
    if (wordDisplayElement) {
        wordDisplayElement.textContent = wordDisplay.join(' ');
    }
    if (wrongGuessesElement) {
        wrongGuessesElement.textContent = `Falsche Buchstabe: ${Array.from(guessedLetters)
            .filter(letter => !currentWord.includes(letter))
            .join(', ')}`;
    }
    if (remainingGuessesElement) {
        const remaining: number = maxGuesses - wrongGuesses;
        remainingGuessesElement.textContent = `Your Life: ${'❤️'.repeat(remaining)}`;
    }
    if (headElement) {
        headElement.classList.remove('head', 'head1', 'head2', 'head3', 'head4', 'head5', 'head6');
        const remaining: number = maxGuesses - wrongGuesses;
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

function handleGuess(letter: string): void {
    if (!isGameStarted || guessedLetters.has(letter) || wrongGuesses >= maxGuesses || timeLeft <= 0) return;
    
    guessedLetters.add(letter);
    if (currentWord.includes(letter)) {
        for (let i: number = 0; i < currentWord.length; i++) {
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

function checkGameState(): void {
    if (wordDisplay.join('') === currentWord) {
        if (winOrRestartElement) {
            winOrRestartElement.textContent = 'You Win! Klick Start to play again.';
            winOrRestartElement.classList.add('animated-text');
        }
        if (timerId !== null) {
            clearInterval(timerId);
            timerId = null;
        }
        disableButtons();
    } else if (wrongGuesses >= maxGuesses) {
        if (winOrRestartElement) {
            winOrRestartElement.textContent = `Game Over! Das Wort ist ${currentWord}. Klick Start to try again.`;
            winOrRestartElement.classList.add('animated-text');
        }
        if (timerId !== null) {
            clearInterval(timerId);
            timerId = null;
        }
        disableButtons();
    }
}

function disableButtons(): void {
    letterButtons.forEach((button: HTMLButtonElement) => button.disabled = true);
}

function resetGame(): void {
    currentWord = getRandomWord();
    guessedLetters.clear();
    wrongGuesses = 0;
    wordDisplay = Array(currentWord.length).fill('_');
    if (winOrRestartElement) {
        winOrRestartElement.textContent = '';
        winOrRestartElement.classList.remove('animated-text');
    }
    letterButtons.forEach((button: HTMLButtonElement) => button.disabled = false);
    isGameStarted = true;
    startTimer();
    updateDisplay();
}

function addEventListeners(): void {
    letterButtons.forEach((button: HTMLButtonElement) => {
        button.addEventListener('click', () => {
            const text: string | null = button.textContent;
            if (text) handleGuess(text.trim());
        });
    });
    
    if (restartButton) {
        restartButton.addEventListener('click', resetGame);
    }
    
    if (categorySelect) {
        categorySelect.addEventListener('change', () => {
            if (categorySelect.value) {
                selectedCategory = categorySelect.value as Category;
                resetGame();
            }
        });
    }
    
    document.addEventListener('keydown', (event: KeyboardEvent) => {
        const letter: string = event.key.toUpperCase();
        if (/^[A-Z]$/.test(letter)) {
            event.preventDefault();
            if (isGameStarted) {
                handleGuess(letter);
            }
        }
    });
}

function initializeGame(): void {
    populateCategorySelect();
    if (categorySelect && categorySelect.value) {
        selectedCategory = categorySelect.value as Category;
    }
    currentWord = getRandomWord();
    wordDisplay = Array(currentWord.length).fill('_');
    timeLeft = 30;
    updateTimerDisplay();
    updateDisplay();
    letterButtons.forEach((button: HTMLButtonElement) => button.disabled = true);
    isGameStarted = false;
    addEventListeners();
}

document.addEventListener('DOMContentLoaded', initializeGame);