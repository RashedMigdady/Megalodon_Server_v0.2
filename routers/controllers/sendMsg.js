// const twilio = require("twilio");

// const accountSid = process.env.ACCOUNT_SID;
// const authToken = process.env.AUTH_TOKEN;
// const client = new twilio(accountSid, authToken);

// const sendMsg = (req, res) => {
//   client.messages
//     .create({
//       body: req.body.confirm,
//       from: process.env.MOBILE_FROM,
//       to: process.env.RECEVER,
//     })
//     .then((message) => res.status(200).json({success : true , message:"message send success"}));
// };

// module.exports = { sendMsg };
