class MyPromise {
  constructor(executor) {
    this.onResolve = null;
    this.onReject = null;
    this.isFullFilled = false;
    this.isRejected = false;
    this.isCalled = false;
    this.value = undefined;

    const resolve = (val) => {
      this.isFullFilled = true;
      this.value = val;
      if (typeof this.onResolve === "function") {
        this.onResolve(val);
        this.isCalled = true;
      }
    };

    const reject = (val) => {
      this.isRejected = true;
      this.value = val;
      if (typeof this.onReject === "function") {
        this.onReject(val);
        this.isCalled = true;
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(callback) {
    this.onResolve = callback;
    if (this.isFullFilled && !this.isCalled) {
      this.onResolve(this.value);
      this.isCalled = true;
    }
    return this;
  }

  catch(callback) {
    this.onReject = callback;
    if (this.isRejected && !this.isCalled) {
      this.onReject(this.value);
      this.isCalled = true;
    }
    return this;
  }

  static resolve(val) {
    return new MyPromise(function executer(resolve) {
      resolve(val);
    });
  }

  static reject(val) {
    return new MyPromise(function executer(_, reject) {
      reject(val);
    });
  }
}

const promise = new MyPromise((resolve, reject) => {
  let lottery = Math.random();
  if (lottery > 0.5) {
    setTimeout(() => resolve("Yeah you won a lottery 🎁"), 1000);
  } else {
    setTimeout(() => reject("Sorry! you lost 😞 "), 1000);
  }
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
