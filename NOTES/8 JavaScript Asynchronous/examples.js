// JavaScript Asynchronous Examples

// 1. setTimeout()
setTimeout(() => {
  console.log("setTimeout: Executed after 1 second");
}, 1000);

// 2. setInterval()
let intervalCount = 0;
const intervalId = setInterval(() => {
  intervalCount++;
  console.log("setInterval: Count", intervalCount);
  if (intervalCount === 3) clearInterval(intervalId);
}, 1000);

// 3. Callback Function
function fetchData(callback) {
  setTimeout(() => {
    const data = "Sample Data";
    callback(data);
  }, 500);
}

fetchData((result) => {
  console.log("Callback: Received", result);
});

// 4. Promise and Promise Chaining
function promiseTask(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value > 0) resolve(value + 10);
      else reject("Value must be positive");
    }, 700);
  });
}

promiseTask(5)
  .then((res) => {
    console.log("Promise:", res);
    return promiseTask(res);
  })
  .then((res2) => {
    console.log("Promise Chaining:", res2);
  })
  .catch((err) => {
    console.error("Promise Error:", err);
  });

// 5. async/await
async function asyncExample() {
  try {
    const res = await promiseTask(3);
    console.log("Async/Await:", res);
    const res2 = await promiseTask(res);
    console.log("Async/Await Chaining:", res2);
  } catch (err) {
    console.error("Async/Await Error:", err);
  }
}

asyncExample();
