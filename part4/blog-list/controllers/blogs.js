const blogRouter = require("express").Router();
const Blog = require("../models/Blog");

blogRouter.get("/blogs", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

blogRouter.post("/blogs", (request, response) => {
  const blog = new Blog(request.body);
  console.log(request.body);

  blog.save().then((result) => {
    response.status(201).json(result);
  });
});

module.exports = blogRouter;
