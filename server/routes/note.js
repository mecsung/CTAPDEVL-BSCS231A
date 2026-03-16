const express = require("express");
const router = express.Router();
import * as controllers from "../controllers/notesController.js";

router.get("/", controllers.getAllNotes);

router.get("/:id", controllers.getSingleNote);

router.post("/", controllers.createNote);

router.patch("/:id", controllers.updateNote);

router.delete("/:id", controllers.deleteNote);

module.exports = router;
