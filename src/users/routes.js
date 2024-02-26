const { Router } = require("express");
const userRouter = Router();

const { hashPass, comparePass } = require("../middleware/auth");

const {
  signupUser,
  getAllUsers,
  login,
  deleteAllUsers,
} = require("./controllers");

userRouter.post("/users/signup", hashPass, signupUser);

userRouter.post("/users/login", comparePass, login);

userRouter.get("/users/getAllUsers", getAllUsers);

userRouter.delete("/users/deleteAllUsers", deleteAllUsers);

module.exports = userRouter;
