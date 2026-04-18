const admin = require("./firebaseAdmin");

const verifyToken = async (req, res, next) => {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).send("No token");
  }

  const token = header.split(" ")[1];
  
//   verifies the token using Firebase Admin SDK
  try {
    const decoded = await admin.auth().verifyIdToken(token);

    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).send("Invalid token");
  }
};

module.exports = verifyToken;