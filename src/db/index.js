    import mongoose from "mongoose";
    import { DB_NAME } from "../constants.js";

    const connectDB= async()=>{
        try {
            const connectionDB= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
            console.log(`\n MongoDB connected !! DB HOST ${connectionDB.connection.host}`); //overview after aftar
            
        } catch (error) {
            console.log("MongDB Connection error",error);
            process.exit(1)
            
        } 

    }
    export default connectDB