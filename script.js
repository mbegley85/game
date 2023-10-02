// script.js
const communalCard = document.getElementById('communal-card');
const challengeTitle = document.getElementById('challenge-title');
const challengePrompt = document.getElementById('challenge-prompt');
const playerHand = document.getElementById('player-hand');

const challengeCards = [
    {
        title: 'Back to Grandma’s',
        prompt: 'How might we reduce the amount of unnecessary time patients spend in the hospital once they are medically stable?',
    },
    {
        title: 'Escape from Darkness',
        prompt: 'How might we make it easier for emergency room doctors to connect patients with substance abuse disorders to long term treatment?',
    },
    // Add more challenge cards...
];

const acceleratorCards = [
    {
        title: 'Terminator™',
        description: 'Remove a critical part of a process or system and solve for its absence.',
        example: 'To reduce wait time for premium members, the Hertz Gold Plus Rewards® loyalty program removes the waiting line altogether and allows drivers to go straight to their rental cars.',
    },
    // Add more accelerator cards...
];

let communalChallenge = null;
let playerAccelerators = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createCard(cardText, containerId, isPlayerHand = false) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.textContent = cardText;
    cardElement.addEventListener('click', () => {
        if (isPlayerHand) {
            playAcceleratorCard(cardText);
        }
    });
    document.getElementById(containerId).appendChild(cardElement);
}

function playAcceleratorCard(cardText) {
    // Logic to handle playing an accelerator card
    console.log(`Played accelerator card: ${cardText}`);
}

function initializeGame() {
    shuffle(challengeCards);
    shuffle(acceleratorCards);

    // Randomly select a communal challenge card
    communalChallenge = challengeCards[Math.floor(Math.random() * challengeCards.length)];

    // Display the communal challenge card
    challengeTitle.textContent = communalChallenge.title;
    challengePrompt.textContent = communalChallenge.prompt;

    // Deal five accelerator cards to the player
    playerAccelerators = acceleratorCards.slice(0, 5);

    // Display player's accelerator cards
    playerAccelerators.forEach((accelerator) => {
        createCard(accelerator.title, 'player-hand', true);
    });
}

initializeGame();
