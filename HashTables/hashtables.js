// Hash Table Example: Caching recently accessed web pages
// Real-world use: Implementing a simple cache using JavaScript's Map

class SimpleCache {
  constructor(limit = 5) {
    this.cache = new Map();
    this.limit = limit;
  }

  get(key) {
    if (this.cache.has(key)) {
      // Move to end to show it was recently used
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
    return null;
  }

  set(key, value) {
    if (this.cache.size >= this.limit) {
      // Remove least recently used
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }
}

// Example usage:
const cache = new SimpleCache(3);
cache.set('a', 1);
cache.set('b', 2);
cache.set('c', 3);
console.log(cache.get('a')); // 1
cache.set('d', 4); // 'b' is removed (least recently used)
console.log([...cache.cache.keys()]); // ['c', 'a', 'd']
