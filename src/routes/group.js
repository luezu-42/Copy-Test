const router = require("express").Router();
const groupController = require("../../controllers/groupController");

const auth = require("../../middleware/auth");

router.post("/", auth, groupController.createGroup);

module.exports = router;