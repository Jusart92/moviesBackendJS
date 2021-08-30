const promise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("hello world");
      } else {
        reject(new Error("hello error!"));
      }
    }, 1000);
  });

async function asyncAwait() {
  try {
    const msg = await promise();
    console.log("message", msg);
  } catch (err) {
    console.log("err", err);
  }
}

asyncAwait();
