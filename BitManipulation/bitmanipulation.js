// Bit Manipulation Example: Counting set bits
// Real-world use: Permissions and flags in operating systems

function countSetBits(n) {
  let count = 0;
  while (n) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}

// Example usage:
console.log(countSetBits(13)); // 3 (1101 has 3 set bits)
