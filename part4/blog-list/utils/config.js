require("dotenv").config();

const PORT = process.env.PORT || 3003;

const MONGODB_URI =
  "mongodb+srv://admin:" +
  process.env.MONGP +
  "@memories.3ypawsz.mongodb.net/?retryWrites=true&w=majority";

module.exports = {
  MONGODB_URI,
  PORT,
};
