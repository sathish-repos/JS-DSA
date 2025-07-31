// Math Algorithm Example: Sieve of Eratosthenes for prime numbers
// Real-world use: Cryptography (prime number generation)

function sieveOfEratosthenes(n) {
  const isPrime = Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return isPrime
    .map((prime, i) => (prime ? i : null))
    .filter((x) => x !== null);
}

// Example usage:
console.log(sieveOfEratosthenes(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
