const connection = require("../../../db/db");
const bcrypt = require("bcrypt");

const createNewUser = async (req, res) => {
  const { firstName,
    lastName,
    email,
    password,
     } =
    req.body;
  const bcryptPassword = await bcrypt.hash(password, 10);
  const query = `INSERT INTO users (firstName,lastName,email,password) VALUES(?,?,?,?)`;
  const data = [
    firstName,
    lastName,
    email,
    bcryptPassword
  ];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        error: err,
      });
    }
    res.status(200);
    res.json(result);
  });
};

module.exports = {
  createNewUser,
};
