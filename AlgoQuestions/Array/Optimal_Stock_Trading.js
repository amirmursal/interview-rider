/**
 * Given a list of prices, where each element prices[i] represents the price of a particular stock on day i,
 * determine the maximum profit to be made by purchasing the stock and selling it on a future date.
 * If it is not possible to generate a profit, return 0.
 * Example:
 * Input: prices = [11,2,3,14]
 * Output: 3
 * Explanation: Buy the stock at day 1 (price = 1) and sell it on day 4 (price = 4), profit: 4 - 1 = 3
 */

function getMaxProfit(arr) {
  let maxProfit = 0;
  let lowestPrice = Number.MAX_SAFE_INTEGER;

  for (let currentPrice of arr) {
    lowestPrice = Math.min(currentPrice, lowestPrice);

    const potentialPrice = currentPrice - lowestPrice;
    maxProfit = Math.max(maxProfit, potentialPrice);
  }
  return maxProfit;
}

const profits = [11, 2, 3, 14];
console.log(getMaxProfit(profits));
