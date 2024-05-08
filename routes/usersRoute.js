const express = require("express");
const userController = require("../controllers/usersController");
const isAuthenticated = require("../middlewares/auth");

const router = express.Router();

router.post("/api/users/register", userController.register);
router.post("/api/users/login", userController.login);
router.get("/api/users/profile", isAuthenticated, userController.profile);

module.exports = router;
