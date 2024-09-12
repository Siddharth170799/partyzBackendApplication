import express from "express"
import mongoose from "mongoose"
import DBString from "./ConnectionString.js"
import bodyParser from "body-parser"
import cors from "cors"
import FunctionHallsRoute from "./Routes/FunctionHallsRoute.js"
import BookingDateRoute from "./Routes/BookingDateRoute.js"
import UserDetailsRoute from "./Routes/UserDetailsRoute.js"


const app = express()
const PORT = 4000
app.use(cors())
app.use(bodyParser.json())
app.use("/api",FunctionHallsRoute)
app.use("/api",BookingDateRoute)
app.use("/api",UserDetailsRoute)
app.get("/",(req,res)=>{
    res.send("this is sidddharth")
})



app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})


mongoose.connect(DBString).then(()=>console.log(" mongodb connected successfully"))