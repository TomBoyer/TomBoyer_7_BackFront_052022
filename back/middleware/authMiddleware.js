require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    
    // recup du payload
    req.token = jwt.verify(token, process.env.SECRET_TOKEN);

    next();
    // }
  } catch (error) {
    res.status(401).json({ error: new Error("Requête invalide") });
  }
};
