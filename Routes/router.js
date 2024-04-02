const { Router } = require("express");
const controller = require("../controller/Controllers");

const router = Router();

router.post("/register", controller.register);
router.get("/login", controller.login);

module.exports = router;
