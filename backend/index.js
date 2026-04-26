import express from 'express';
const app = express();
const cors = require("cors");
const verifyToken = require("./authMiddleware");

const { db } = require("./firebaseAdmin");
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

app.post("/create-user", verifyToken, async (req, res) => {
  const uid = req.user.uid;
  const { role, volunteerDetails, ngoDetails } = req.body;

  if (!["volunteer", "ngo"].includes(role)) {
    return res.status(400).send("Invalid role");
  }

  await db.collection("users").doc(uid).set({
    role,
    volunteerDetails: volunteerDetails || null,
    ngoDetails: ngoDetails || null,
    onboardingCompleted: true,
    createdAt: new Date(),
  }, { merge: true });

  res.send("User stored");
});

app.get("/user", verifyToken, async (req, res) => {
  const uid = req.user.uid;

  const doc = await db.collection("users").doc(uid).get();

  res.send(doc.data());
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});