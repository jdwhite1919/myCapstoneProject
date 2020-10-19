const { Router } = require("express");
const router = Router();

router
  // routes will be specified at the app-level
  .route("/") // equivalent to /posts
  .get((request, response) => {
    const posts = db.get("posts").value();
    response.json(posts);
  })
  .post((request, response) => {
    const post = db
      .get("posts")
      .insert(request.body)
      .write();
    response.json(post);
  });
// don't forget to export the router Object
module.exports = router;
