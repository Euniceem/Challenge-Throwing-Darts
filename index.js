function scoreCalculator(arr) {
  let score = 0;
  let bonus = arr.every(num => num < 5);

  for (var i = 0; i < arr.length; i++) {

    if (arr[i] >= 5 && arr[i] <= 10) {
      score += 5;

    } else if (arr[i] < 5) {
      score += 10;

      if (bonus) {
        score = 100;
      }

    } else if (arr[i] > 10 && arr[i] <= 20) {
      score += 0;

    } else if (arr[i] > 20) {
      throw new Error('Score is invalid');

    } else if (arr[i].length === 0) {
      score = -1;
    }
  }
  return score;
}

module.exports = scoreCalculator;
