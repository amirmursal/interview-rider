/**
 * You start with an initial power of power, an initial score of 0, and a bag of tokens given as an integer array tokens, 
 * where each tokens[i] denotes the value of token i.
 * Your goal is to maximize the total score by strategically playing these tokens. 
 * In one move, you can play an unplayed token in one of the two ways (but not both for the same token):
 * Face-up: If your current power is at least tokens[i], you may play token i, losing tokens[i] power and gaining 1 score.
 * Face-down: If your current score is at least 1, you may play token i, gaining tokens[i] power and losing 1 score.
 * Return the maximum possible score you can achieve after playing any number of tokens.
 */

function getCount(tokens, power) {
    tokens.sort((a, b) => a - b); // Sort tokens in ascending order

    let score = 0;
    let maxScore = 0;
    let i = 0, j = tokens.length - 1;

    while (i <= j) {
        if (power >= tokens[i]) {
            // Play face-up
            power -= tokens[i];
            score++;
            i++;
            maxScore = Math.max(maxScore, score);
        } else if (score > 0) {
            // Play face-down
            power += tokens[j];
            score--;
            j--;
        } else {
            // Can't play face-up or face-down
            break;
        }
    }

    return maxScore;
}

console.log(getCount([100], 50)); // 0
console.log(getCount([200, 100], 150)); // 1
console.log(getCount([100, 200, 300, 400], 200)); // 2