import express from 'express';
const app = express();
const cors = require("cors");
const verifyToken = require("./authMiddleware");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server running");
});

app.get("/protected", verifyToken, (req, res) => {
  res.send({
    message: "Access granted",
    user: req.user,
  });
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});