const connection = require("./../../db/db");

const createGymRate = (req, res) => {
  const { rate, gymId } = req.body;
  const userId = req.token.userId;
  const query = `INSERT INTO rate_gym (rate,userId,gymId) VALUES (?,?,?)`;
  const data = [rate, userId, gymId];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        error: err,
      });
    }
    res.status(201).json({
      success: true,
      message: "Success new Rate to the gym Added ",
      result: result,
    });
  });
};

const getGymRateById = (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM rate_gym WHERE gymId = ${id}`;
  connection.query(query, (error, result) => {
    if (error) {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        error: error,
      });
    }
    res.status(200).json({
      success: true,
      message: "all rating for this gym ",
      result: result,
    });
  });
};

const createResturantRate = (req, res) => {
  const { rate, resturantId } = req.body;
  const userId = req.token.userId;
  const query = `INSERT INTO rate_resturant (rate,userId,resturantId) VALUES (?,?,?)`;
  const data = [rate, userId, resturantId];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        error: err,
      });
    }
    res.status(201).json({
      success: true,
      message: "Success new Rate to the Resturant Added ",
      result: result,
    });
  });
};

const getResturantRateById = (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM rate_resturant WHERE resturantId = ${id}`;
  connection.query(query, (error, result) => {
    if (error) {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        error: error,
      });
    }
    res.status(200).json({
      success: true,
      message: "all rating for this Resturant ",
      result: result,
    });
  });
};

const createTrainerRate = (req, res) => {
  const { rate, trainerId } = req.body;
  const userId = req.token.userId;
  const query = `INSERT INTO rate_trainer (rate,userId,trainerId) VALUES (?,?,?)`;
  const data = [rate, userId, trainerId];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        error: err,
      });
    }
    res.status(201).json({
      success: true,
      message: "Success new Rate to the Trainer Added ",
      result: result,
    });
  });
};

const getTrainerRateById = (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM rate_trainer WHERE trainerId = ${id}`;
  connection.query(query, (error, result) => {
    if (error) {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        error: error,
      });
    }
    res.status(200).json({
      success: true,
      message: "all rating for this Trainer ",
      result: result,
    });
  });
};

module.exports = {
  createGymRate,
  getGymRateById,
  createResturantRate,
  getResturantRateById,
  createTrainerRate,
  getTrainerRateById,
};
