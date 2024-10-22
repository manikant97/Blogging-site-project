const Author = require("../models/authorModel");

const createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    return res.status(201).send({ status: true, message: user });
} catch (err) {
  res.status(500).send({ status: false, message: err.message });
}
};

module.exports = {createAuthor};