const createPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Date.now() % 2 == 0) {
        //* success
        resolve("yey");
      } else {
        //! failed
        reject("error");
      }
    }, 3000);
  });
};

createPromise()
  .then((data) => {
    console.log("the promise succeeded with value ", data);
  })
  .catch((err) => {
    console.log("the promise failed with value ", err);
  });

// const calc = (n1, n2, op) => {
//   switch (op) {
//     case "+":
//       return n1 + n2;
//     case "-":
//       return n1 - n2;
//   }
// };

// calc(5, 5, "+");
// calc(5, "+", 5);
