require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const noteRoutes = require("./routes/note");

app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use("/api/notes", noteRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
