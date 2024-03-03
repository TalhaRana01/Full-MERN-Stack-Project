import mongoose from "mongoose";
import DB_NAME from "../constants.js";

const dbConnection = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`Database Connection Established`);
  } catch (error) {
    console.log("MONGODB Connection Error:", error);
    process.exit(1);
  }
};

export default dbConnection;

// const dbConnection = async ()=>{
//   try {
//    await mongoose.connect(`{process.env.MONGODB_URI},{ DB_NAME}`)
//    console.log("Database Connection Connected")

//   } catch (error) {

//     console.log(error)
//   }
// }

// export default dbConnection;
