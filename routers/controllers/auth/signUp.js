const connection = require("../../../db/db");
const bcrypt = require("bcrypt");
// const jwt = require('jsonwebtoken'); // to login After Sign Up

const createNewUser = async (req, res) => {
  const { firstName,
    lastName,
    email,
    password,
  } =
    req.body;

  if (!req.body.firstName || req.body.firstName.length < 3 || /\d/.test(req.body.firstName)) {
    res.status(400).json({
      success: false,
      message: 'First Name is requierd and should be minimum 3 charachters and without contains numbers',
    });
    return;
  }

  if (!req.body.email || !req.body.email.includes('@') || !req.body.email.includes('.')) {
    res.status(400).json({
      success: false,
      message: 'Enter correct email please',
    });
    return;
  }
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
    // const logingAfterRegisterdUser = (email ) => {
    //   var ress = {}
    //   const queryLoginAfterRegisterd = `SELECT * FROM users WHERE email ='${email}'`;
    //   connection.query(queryLoginAfterRegisterd, (err, resultz) => {
    //     if (err)
    //       res.status(502).json({
    //         success: false,
    //         message: ' Error in loging after Registerd',
    //         error: err
    //       })
    //     //console.log("xxx" ,resultz);
    //     ress = resultz;
    //     // return ress;

    //   })

    //   return ress;

    // }

    // const resultLoging = logingAfterRegisterdUser(email);

    // const payload = {
    // userId: resultLoging[0].id,
    // role: resultLoging[0].role,
    // emailId: resultLoging[0].email,
    // };
    res.status(200);
    res.json(result);
    // const options = {
    //   expiresIn: "600h",
    // };
    // const token = await jwt.sign(payload, "Rashed", options);
    // res.status(200).json(result);
  });
};

module.exports = {
  createNewUser
};
