//1 April
const fetch = (age) => {
    return new Promise((resolve, reject) => {
      if (age > 18) {
        return resolve("Yes, you can vote!");
      } else {
        return reject("No, you can't");
      }
    });
  };
  
  fetch(12)
    .then((data) => {
      console.log("success");
      console.log(data);
    })
    .catch((error) => {
      console.log("error");
      console.log(error);
    })
    .finally(() => {
      console.log("finally i'm here.");
    });
    