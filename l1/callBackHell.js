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

const callbackHell = () => {
  createPromise()
    .then((data1) => {
      console.log(data1);
      createPromise()
        .then((data2) => {
          console.log(data2);
          createPromise()
            .then((data3) => {
              console.log(data3);
              createPromise()
                .then((data4) => {
                  console.log(data4);
                })
                .catch((err4) => {
                  console.log(err4);
                });
            })
            .catch((err3) => {
              console.log(err3);
            });
        })
        .catch((err2) => {
          console.log(err2);
        });
    })
    .catch((err1) => {
      console.log(err1);
    });
};

const callbackHaven = async () => {
  try {
    let data1 = await createPromise();
    console.log(data1);
    let data2 = await createPromise();
    console.log(data2);
    let data3 = await createPromise();
    console.log(data3);
    let data4 = await createPromise();
    console.log(data4);
  } catch (err) {
    console.log(err);
  }
};
