import dotenv from "dotenv"
import connectDB from "./db/index.js";  // Ensure you are importing a file, not a directory
    
// const app=express(

// )
dotenv.config(  {
    path:'./env'
})
connectDB()
// (async ()=>{
// try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//     app.on("error",()=>{
//         console.log("Error",error);
//         throw error 
//     })
//     app.listen( process.env.PORT,()=>{
//             console.log(`App is listening on ${process.env.PORT}`);
            
//     }    )
// } catch (error) {
//     console.error("Error:",error)
//     throw err
// }
// })