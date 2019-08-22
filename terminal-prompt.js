const prompt = require("prompt");

prompt.start();

prompt.get(["email", "password"], (err, result) => {
  if (err) {
    console.log("error shits me", err);
  } else {
    console.log("result is", result);
  }
});
