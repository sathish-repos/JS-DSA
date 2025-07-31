// Dynamic Programming Example: Coin Change Problem
// Real-world use: Making change with minimum coins in ATMs

function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Example usage:
console.log(coinChange([1, 2, 5], 11)); // 3 (5+5+1)
