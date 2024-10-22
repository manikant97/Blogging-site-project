const Blog = require("../models/blogModel");

const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    return res.status(201).send({ status: true, message: blog });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

const getPublishedBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true, isDeleted: false });
    return res.status(201).send({ status: true, message: blogs });
} catch (err) {
  res.status(500).send({ status: false, message: err.message });
}
};


module.exports = { createBlog, getPublishedBlogs};