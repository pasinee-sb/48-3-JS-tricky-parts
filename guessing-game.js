function guessingGame() {
  const target = Math.floor(Math.random() * 100);
  let count = 0;
  let isWon = false;

  return function keepCount(num) {
    if (isWon) {
      return "The game is over, you already won!";
    }
    count++;

    if (target === num) {
      isWon = true;
      return `You win! You found ${num} in ${count} guesses.`;
    } else if (target > num) {
      return `${num} is too high`;
    } else {
      return `${num} is too low`;
    }
  };
}

module.exports = { guessingGame };
