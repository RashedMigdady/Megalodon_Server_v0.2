const connection = require("../../db/db");
const createNewComment = (req, res) => {
  const { comment } = req.body;
  const userId = req.token.userId;
  const query = `INSERT INTO feedback (
        comment ,
        userId
       )
       VALUES(?,?)`;
  const data = [comment, userId];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Server Error`,
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      message: "new  comment  created",
      result: result,
    });
  });
};

const updatecommentById = (req, res) => {
  const id = req.params.id;
  const { comment } = req.body;

  const query = `UPDATE feedback SET comment= "${comment}"  WHERE id= ${id}`;
  connection.query(query, (err, result) => {
    if (err) {
      console.log(err.response);
      return;
    }
    res.status(200).json({
      success: true,
      message: `comment  ${id} updated `,
      result: result,
    });
  });
};

const deleteCommentById = (req, res) => {
  const id = req.params.id;
  const query = `UPDATE feedback SET is_delete="1"  WHERE id = ${id}`;
  connection.query(query, (err, result) => {
    if (err) {
      console.log(err.response);
      return;
    }
    res.status(200).json({
      success: true,
      message: `comment   ${id} deleted `,
    });
  });
};

const getComment = (req, res) => {
  const query =  `SELECT * FROM feedback LEFT JOIN users ON feedback.userId=users.id  `;
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    }
    return res.status(200).json({
      success: true,
      message: `get comment`,
      comment: result,
      totalCount: result.length
    });
  });
};

module.exports = {
  createNewComment,
  updatecommentById,
  deleteCommentById,
  getComment,
};
