const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
app.listen(4040, () => console.log("Listening on port 4040"));

app.use(cors());
app.use(express.json());

app.route("/api/getPosts").get((req, res) => {
  pool.query("SELECT * FROM posts", (err, posts) => {
    console.log(err);
    if (err) {
      res.status(500).json({ err });
    } else {
      res.status(200).send({ posts: posts.rows });
    }
  });
});

// app.route("/").get((request, response) => {
//   response.status(200).json({ message: "HELLO WORLD" });
// });

// const logging = (request, response, next) => {
//   console.log(`${request.method} ${request.url} ${Date.now()}`);
//   next();
// };

// app.use(logging);
