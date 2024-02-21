require(dotenv).config();
const express = require("express");
const user = require("./users/models");
const userRouter = require("./users/routes");

const port = process.env.port || 5001;

const app = express();

app.use(express.json());

const syncTables = async () => {
  User.sync();
};

app.listen(port, () => {
  syncTables();
  console.log(`Server is running on port ${port}`);
});
