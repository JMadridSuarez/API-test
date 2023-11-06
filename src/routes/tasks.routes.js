const {Router} = require("express");
const pool = require("../db");
const router = Router();
const {getAllTasks, getTask, post, deleteTask,put} = require("../controllers/task.controller");

router.get("/tasks", getAllTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks", post);

router.delete("/tasks/:id", deleteTask);

router.put("/tasks/:id", put);



module.exports = router;