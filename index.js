const express = require("express");
const route = require("./routes/route");
const { default: mongoose } = require("mongoose");
const app = express();
require("dotenv").config();

app.use(express.json());

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.URL, { useNewUrlParser: true })
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT, function () {
  console.log("Express app running on PORT : " + process.env.PORT);
});