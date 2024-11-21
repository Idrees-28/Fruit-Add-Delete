const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/todo")
  .then(() => console.log("DB connected successfully"))
  .catch(() => console.log("DB connection failed"));

// Fruit Model
const Fruit = mongoose.model("Fruit", { name: String }, "fruit");

// Routes
// Get all fruits
app.get("/fruitlist", (req, res) => {
  Fruit.find().then((retdata) => {
    res.send(retdata);
  });
});

// Add a new fruit
app.post("/addfruit", (req, res) => {
  const newfruit = req.body.newfruit;

  const newFruit = new Fruit({
    name: newfruit,
  });

  newFruit
    .save()
    .then(() => res.status(200).send({ success: true, message: "Saved successfully" }))
    .catch((err) => res.status(500).send({ success: false, error: err }));
});

// Delete a fruit
app.delete("/deletefruit/:id", (req, res) => {
  const fruitId = req.params.id;

  Fruit.findByIdAndDelete(fruitId)
    .then(() => res.status(200).send({ success: true, message: "Deleted successfully" }))
    .catch((err) => res.status(500).send({ success: false, error: err }));
});

// Start the server
app.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
});
