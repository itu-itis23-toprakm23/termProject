// NEW PART
function shuffle() {
	const array = [0, 1, 2, 3, 4];
	const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
	return shuffledArray;
}

function makeCardsUnclickable() {
	const cards = document.querySelectorAll('.card');
	cards.forEach(card => {card.style.pointerEvents = 'none';})
}

function makeCardsClickable() {
	const cards = document.querySelectorAll('.card');
	cards.forEach(card => {card.style.pointerEvents = 'auto';})
}

function makeStartUnvisible() {
	const start = document.getElementById('start-button');
	start.style.display = 'none';
}

function makeRestartUnvisible() {
	const start = document.getElementById('restart-button');
	start.style.display = 'none';
}

function makeRestartVisible() {
	const start = document.getElementById('restart-button');
	start.style.display = 'flex';
}

function flipSingleCard(card) {
	card.classList.toggle('card-flipped');
}

function flipCards() {
	const cards = document.querySelectorAll('.card');
	for (let i=0; i<cards.length; i++) {
		cards[i].classList.toggle('card-flipped');
	}
}

function changeCardOrder(shuffledArray) {
	const cardContainer = document.querySelector('.card-container');
	const cards = Array.from(document.querySelectorAll('.card'));
	
	// Shuffling cards randomly 
	temp = [0, 0, 0, 0, 0];
	for (let i=0; i<cards.length; i++) {
		temp[i] = cards[shuffledArray[i]];
	}

	cardsArray = temp;

	// Displaying randomly shuffled cards via toggling
	cards.forEach(card => cardContainer.removeChild(card));
	cardsArray.forEach(card => cardContainer.appendChild(card));
}

function updateScore(points) {
	const scoreElement = document.getElementById('score-container');
	scoreElement.innerHTML = `Score: ${points}`;
}

function startGame(restarted=false) {
	makeStartUnvisible();
	makeRestartUnvisible();
	document.getElementById('score-container').style.display = 'flex';
	const shuffledArray = shuffle();
	changeCardOrder(shuffledArray);
	setTimeout(flipCards.bind(null), 1500);
	setTimeout(checkAnswers.bind(null, shuffledArray), 1500);
}

function restart() {
	location.reload();
}

function checkAnswers(answerKey) {
	let i = 0;
	let score = 0;

	// Selecting all letters and listening events through for loop
	const cards = document.querySelectorAll('.card');
	[...cards].forEach((card, index) => {
		card.addEventListener('click', function() {
			if (answerKey[index] == i) {
				score += 20;
				if (score == 100) {
					updateScore(100);
					makeCardsUnclickable();
					makeRestartVisible();
					window.alert('You won!');
				}
				updateScore(score);
				flipSingleCard(card);
			}
			else {
				makeCardsUnclickable();
				makeRestartVisible();
				window.alert('You lost!');
			}
			i += 1;
		});
	})
}