
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
let diceEl = document.querySelector('.dice');

const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// reseting the game

let currentScore0, currentScore1, totalScore0, totalScore1, isPlayer0, win;

reset()

function reset() {
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');
    currentScore0 = 0;
    currentScore1 = 0;
    totalScore0 = 0;
    totalScore1 = 0;
    isPlayer0 = true;
    win = false;
}

btnNewGame.addEventListener('click', () => {
    reset();
    document.querySelector(`#current--0`).textContent = 0;
    document.querySelector(`#current--1`).textContent = 0;
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
});


btnHold.addEventListener('click', () => {

    if (win) return;

    if (isPlayer0) {

        totalScore0 += Number(currentScore0);
        score0El.textContent = totalScore0;

        if (totalScore0 >= 100) {
            win = true;
            score0El.innerHTML = '<strong>WON</strong>';
            document.querySelector(`#current--0`).textContent = totalScore0;
            document.querySelector('.player--0').classList.add('player--winner');
            return;
        }
    }
    else {

        totalScore1 += Number(currentScore1);
        score1El.textContent = totalScore1;

        if (totalScore1 >= 100) {
            win = true;
            score1El.innerHTML = '<strong>WON</strong>';
            document.querySelector(`#current--1`).textContent = totalScore1;
            document.querySelector('.player--1').classList.add('player--winner');
            return;
        }

    }

    switchPlayer();

})

btnRoll.addEventListener('click', () => {

    if (win) return;
    // Generate random num 1 - 6
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // display dice
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');


    if (isPlayer0) {
        // Check for roll 1
        if (dice === 1) {
            // Switth player , make currect score 0 

            switchPlayer();
        }
        else {
            // add dice num to current score
            currentScore0 += dice;
            document.querySelector('#current--0').textContent = currentScore0;
        }
    } else {

        // Check for roll 1
        if (dice === 1) {
           
            switchPlayer();
        }
        else {
            // add dice num to current score
            currentScore1 += dice;
            document.querySelector('#current--1').textContent = currentScore1;
        }

    }

})

function switchPlayer() {

    isPlayer0 ? currentScore0 = 0 : currentScore1 = 0;

    document.querySelector(`#current--${isPlayer0 ? 0 : 1}`).textContent = 0;
    document.querySelector(`.player--${isPlayer0 ? 0 : 1}`).classList.remove('player--active');
    document.querySelector(`.player--${isPlayer0 ? 1 : 0}`).classList.add('player--active');

    isPlayer0 = isPlayer0 ? false : true;
}




