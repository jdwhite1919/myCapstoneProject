const express = require("express");
const app = express();
app.listen(4040, () => console.log("Listening on port 4040"));

app.route("/").get((request, response) => {
  response.status(200).json({ message: "HELLO WORLD" });
});

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

app.use(logging);
