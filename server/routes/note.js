const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Notes API! Here you can find all your notes.",
  });
});

router.get("/:id", (req, res) => {
  res.json({
    bookd_id: req.params.id,
    note: "This is a sample note for the book with the given ID.",
    date: new Date().toISOString().split('T')[0],
  });
});

router.post("/", (req, res) => {
  res.json({
    message: "Note created successfully!",
    note: req.body.note,
    date: new Date().toISOString().split('T')[0],
  });
});

router.patch("/:id", (req, res) => {
  res.json({
    message: `Note with ID ${req.params.id} updated successfully!`,
    updatedFields: req.body,
  });
});

router.delete("/:id", (req, res) => {
  res.json({
    message: `Note with ID ${req.params.id} deleted successfully!`,
  });
});

module.exports = router;
