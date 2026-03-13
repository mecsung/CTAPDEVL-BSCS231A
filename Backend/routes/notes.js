const express = require("express")
const router = express.Router();

const Note = require("../models/noteModels");

//get method
router.get("/", (req, res) => {
   res.json({
    name: 'Donald Trump',
    age: '69',
    gender: 'gay',
    pedophile: 'yes',
    type: 'kids',
    inEpstein: 'yes'
   });
});

//get method with id
router.get("/:id", (req, res) => {
   const { id } = req.params;
   res.json({ message: `You requested note with id ${id}` });
});

//post method
router.post("/", async (req, res) => {
   const { title, content } = req.body;
   console.log(req.body)

   try {
      const note = await Note.create({ title, content });
      res.status(200).json(note);
   }catch (error) {
      res.status(400).json({ error: error.message });
   }
   res.json({ message: "Note created successfully" });
});

//delete method
router.delete("/:id", (req, res) => {
   const { id } = req.params;
   res.json({ message: `Note with id ${id} deleted successfully` });
});

//update method
router.patch("/:id", (req,res) => {
   const { id } = req.params;
   res.json({ message: `Note with id ${id} updated successfully` });
});

module.exports = router;