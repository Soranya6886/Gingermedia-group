const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.post("/api/login", userController.sign_in);
router.post("/api/register", userController.register);
router.get("/api/getUserDetails/:userId", userController.getUserDetails);
router.put("/api/editUserDetails/:userId", userController.editUserDetails);
module.exports = router;
