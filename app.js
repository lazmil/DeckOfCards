// Get DOM elements
const wholeContainer = document.getElementById('wholeContainer');
const deckLine = document.getElementById('deck');
const shuffleBtn = document.getElementById('shuffleBtn');
const dealBtn = document.getElementById('dealBtn');

// Define suits and values for the cards
const suits = ['♡', '♠', '♣', '♦'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const cards = [];

let single = 0;

// Generate the deck of cards
for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < values.length; j++) {
    // Connect suit and value to create a card representation
    cards.push(suits[i] + ' ' + values[j]);
  }
}

// Shuffle function to randomly permute the array
function Shuffle(array) {
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * array.length);

    // Swap cards at random indexes (i and j) by destructuring operation
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Create a container div for displaying cards
const container = document.createElement('div');
container.className = 'cards-container';

// Event listener for dealing a card
dealBtn.addEventListener('click', () => {
  if (single < 52) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.innerHTML = cards[single];
    container.appendChild(cardDiv);
  } else {
    alert('No more cards to deal');
  }
  single++;
});

// Event listener for shuffling the deck
shuffleBtn.addEventListener('click', () => {
  deckLine.innerText = 'Deck shuffled!';
  container.innerHTML = '';
  Shuffle(cards);
  single = 0;
});

// Append the container to the main container in the DOM
wholeContainer.appendChild(container);
