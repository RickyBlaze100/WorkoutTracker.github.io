const mongoose = require("mongoose");

const dbC = process.env.MONGODB_URI;




async function connection(){
  await mongoose.connect(dbC,{
      parse: true,
      user: true  
  }, () =>  
);
}





module.exports = connection;