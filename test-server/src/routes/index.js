const express = require("express");
const { login, register } = require("../controllers/auth.controller");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello Server!");
});

router.post("/login", login);

router.post("/register", register);

module.exports = router;