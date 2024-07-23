//* implement auto retry promises
function autoRetryPromise(promiseFunction, maxRetries, delayBetweenRetries) {
  return new Promise((resolve, reject) => {
    function retryAttempt(attempt) {
      promiseFunction()
        .then(resolve)
        .catch((error) => {
          if (attempt <= maxRetries) {
            console.log(`Retry attempt ${attempt}/${maxRetries}`);
            setTimeout(() => retryAttempt(attempt + 1), delayBetweenRetries);
          } else {
            reject(error);
          }
        });
    }

    // Start the first attempt
    retryAttempt(1);
  });
}

// Example usage:
function myAsyncTask() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve("Task completed successfully");
    } else {
      reject("Task failed");
    }
  });
}

autoRetryPromise(myAsyncTask, 3, 1000)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Max retries reached. Task failed:", error);
  });
