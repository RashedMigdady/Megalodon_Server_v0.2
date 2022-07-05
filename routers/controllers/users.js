const connection = require("../../db/db");

const updateUserById = (req, res) => {
  const id = req.token.userId;
  const {
    age,
    phoneNumber,
    country,
    weight,
    height,
    diseases,
  } = req.body;
  
  const query = ` UPDATE users SET 
    age=?,
    phoneNumber=?,
    country=?,
    weight=?,
    height=?,
    diseases=?
     WHERE id =${id}`;
     const data = [
      age,
      phoneNumber,
      country,
      weight,
      height,
      diseases,
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
//////////////////////////////////////
const getInfo = (req, res) => {
  const id = req.token.userId;
  const query = `SELECT * FROM users WHERE id=${id}`;
  connection.query(query, (err, result) => {
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
  updateUserById,
  getInfo,
};
