/**
 * You are keeping track of a record of scores for a baseball game with the following operations:
 * Each operation is a string and may be one of the following:
 * An integer x — Record a new score of x.
 * "+" — Record a new score that is the sum of the previous two scores.
 * "D" — Record a new score that is double the previous score.
 * "C" — Invalidate and remove the previous score from the record.
 * You are given a list of strings operations representing the operations, and your task is to return the sum of all the scores on the record after performing all the operations.
 */

const scoreOperations = ["1", "2", "D", "C", "+"];

const calculateScore = (operations) => {
  const result = [];

  for (let operation of operations) {
    if (!isNaN(operation)) {
      result.push(parseInt(operation));
    } else if (operation === "D") {
      result.push(result[result.length - 1] * 2);
    } else if (operation === "C") {
      result.pop();
    } else if (operation === "+") {
      result.push(result[result.length - 1] + result[result.length - 2]);
    }
  }

  return result.reduce((acc, current) => acc + current, 0);
};

calculateScore(scoreOperations);
