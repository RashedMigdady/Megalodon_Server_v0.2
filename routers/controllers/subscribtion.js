const connection = require("../../db/db");
const addGymUser = (req, res) => {
  const { gymId } = req.body;
  const userId = req.token.userId;
  const d = new Date();
  const date = `${d.getFullYear()}-${d.getMonth() + 2}-${d.getDate()}`;
  const query = `INSERT INTO subscriptionsGym (userId , gymId , date_to) VALUES (?,?,?)`;
  const data = [userId, gymId, date];
  connection.query(query, data, (err, result ) => {
    if (err)
      return res
        .status(404)
        .json({ success: false, message: "There is Error!", Error: err });
    return res
      .status(200)
      .json({ success: true, message: "add new subscribe is Done !" });
  });
};
const addTrainerUser = (req, res) => {
  const { trainerId } = req.body;
  const userId = req.token.userId;
  const d = new Date();
  const date = `${d.getFullYear()}-${d.getMonth() + 2}-${d.getDate()}`;
  const query = `INSERT INTO subscriptionsTrainers (userId , trainerId , date_to) VALUES (?,?,?)`;
  const data = [userId, trainerId, date];
  connection.query(query, data, (err, result) => {
    if (err)
      return res
        .status(404)
        .json({ success: false, message: "There is Error!", Error: err });
    return res
      .status(200)
      .json({ success: true, message: "add new subscribe is Done !" });
  });
};
////////////////////////////////////////////////
const addRestaruntUser = (req, res) => {
  const { restaurantId } = req.body;
  const userId = req.token.userId;
  const d = new Date();
  const date = `${d.getFullYear()}-${d.getMonth() + 2}-${d.getDate()}`;
  const query = `INSERT INTO subscriptionsRestaurant (userId , restaurantId , date_to) VALUES (?,?,?)`;
  const data = [userId, restaurantId, date];
  connection.query(query, data, (err, result) => {
    if (err)
      return res
        .status(404)
        .json({ success: false, message: "There is Error!", Error: err });
    return res
      .status(200)
      .json({ success: true, message: "add new subscribe is Done !" });
  });
};
/////////////////////////////////////////////////////////////////
const getResturantsSubscribtion = (req , res)=>{
  const id  = req.token.userId;
  const query = `SELECT * FROM subscriptionsRestaurant INNER JOIN resturant ON subscriptionsRestaurant.restaurantId=resturant.id WHERE userId=${id}`;
  connection.query(query , (err , result)=>{
   // if (err) return res.status(404).json({success:false , message:"There is Error!" , Error:err});

   res.status(200).json({success:true , message:"get all restaurants subscriptions!" , result:result});
  })
}

const getGymsSubscribtion = (req , res)=>{
  const id  = req.token.userId;
  const query = `SELECT * FROM subscriptionsGym INNER JOIN gym ON subscriptionsGym.gymId=gym.id WHERE userId=${id}`;
  connection.query(query , (err , result)=>{
   // if (err) return res.status(404).json({success:false , message:"There is Error!" , Error:err});

   res.status(200).json({success:true , message:"get all gyms subscriptions!" , result:result});
  })
}

const getTrainersSubscribtion = (req , res)=>{
  const id  = req.token.userId;
  const query = `SELECT userId,trainerId,date_to,id,phoneNumber,location,image,sport,priceMonthly,description,experience ,CONCAT(firstName," ",lastName) AS name FROM subscriptionsTrainers INNER JOIN trainers ON subscriptionsTrainers.trainerId=trainers.id WHERE userId=${id}`;
  connection.query(query , (err , result)=>{
   // if (err) return res.status(404).json({success:false , message:"There is Error!" , Error:err});

   res.status(200).json({success:true , message:"get all trainers subscriptions!" , result:result});
  })
}

const getAllResturantsSubscribtion = (req , res)=>{
  
  const query = `SELECT * FROM subscriptionsRestaurant INNER JOIN resturant ON subscriptionsRestaurant.restaurantId=resturant.id
   INNER JOIN users ON subscriptionsRestaurant.userId=users.id `;
  connection.query(query , (err , result)=>{
   // if (err) return res.status(404).json({success:false , message:"There is Error!" , Error:err});

   res.status(200).json({success:true , message:"get all restaurants subscriptions!" , result:result});
  })
}


module.exports = { addGymUser, addRestaruntUser, addTrainerUser , getResturantsSubscribtion , getGymsSubscribtion , getTrainersSubscribtion,getAllResturantsSubscribtion};