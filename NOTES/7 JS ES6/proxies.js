// JavaScript Proxies Example
// Proxies allow you to define custom behavior for fundamental operations

const target = {
  message: "Hello!",
};

const handler = {
  get(obj, prop) {
    if (prop === "message") {
      return obj[prop] + " (from Proxy)";
    }
    return obj[prop];
  },
};

const proxy = new Proxy(target, handler);
console.log(proxy.message); // Hello! (from Proxy)
