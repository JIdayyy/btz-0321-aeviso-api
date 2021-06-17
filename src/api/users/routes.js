const express = require("express");
const bodyValidator = require("../../middlewares/bodyValidator");

const router = express.Router();

const getAll = require("./controllers/getAll");
const getOne = require("./controllers/getOne");
const post = require("./controllers/post");
const put = require("./controllers/put");
const deleteUser = require("./controllers/deleteUser");
const { userSchema } = require("../../schemas");

const createUserProject = require("./controllers/createUserProject");
const deleteUserProject = require("./controllers/deleteUserProject");

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", bodyValidator(userSchema), post);
router.put("/:id", put);
router.delete("/:id", deleteUser);

router.post("/:userId/projects/:projectId", createUserProject);
router.delete("/:userId/projects/:projectId", deleteUserProject);

module.exports = router;
