const connection  = require("../../db/db");
const createNewResturent = (req,res)=>{
const { 
    name,
    location,
    image,
    monthlyPrice,
    rate

}=req.body

const query = `INSERT INTO resturant (
     name,
    location,
    image,
    monthlyPrice,
    rate)
    VALUES(?,?,?,?,?)`;

    const data =[name,
        location,
        image,
        monthlyPrice,
        rate];
        connection.query(query,data, (err, result) => {
            if (err) {
              res.status(500).json({
                success: false,
                message: `Server Error`,
                error: err,
              });}
              res.status(200).json({success : true , message:"new  resturant created", result:result});
            });

}
const getAllResturants = (req,res)=>{
  const query = `SELECT * FROM  resturant  WHERE is_deleted=0 `
  connection.query(query , (error, result)=>{

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: `Server Error`,
    //     error: error,
    //   });
    // }
    res.status(200).json({success : true , message:" all resturants ", result:result});
  });
  };
  
const updateResturantById = ( req, res )=> 
{
  const id = req.params.id;
  const { 
    name,
    location,
    image,
    monthlyPrice,
    rate

}=req.body

const query = `UPDATE resturant SET name= "${name}" , location="${location}" , image="${image}" ,monthlyPrice="${monthlyPrice}",rate="${rate}" WHERE id= ${id}`;
connection.query(query,(err,result)=>{
  if (err) {
    console.log(err.response);
    return;
  }
  res.status(200).json({
    success : true ,
    message:`resturant ${id} updated `,
    result:result
  });
});
}

const deleteResturantById =( req ,res)=>{
  const id = req.params.id;
  const query =  `UPDATE resturant SET is_deleted="1"  WHERE id = ${id}`
  connection.query(query,(err,result)=>{
    if (err) {
      console.log(err.response);
      return;
    }
    res.status(200).json({
      success : true ,
      message: `resturant  ${id} deleted `
    });
  });

}

const getResturantById = (req, res) => {
  let id = req.params.id;
  const query = `SELECT * FROM resturant WHERE id=${id}`;
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
      Resturant: result,
    });
  });
};


module.exports = {createNewResturent , getAllResturants ,updateResturantById ,deleteResturantById ,getResturantById }