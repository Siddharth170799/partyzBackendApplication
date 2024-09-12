import mongoose from "mongoose";


const FunctionHallDetails = mongoose.Schema({
    Name:{type:String},
    Address:{type:String},
    Image:{type:String},
    lat:{type:String},
    long:{type:String},
    Capacity:{type:String}
})

const FunctionHallSchema = mongoose.model("function hall list",FunctionHallDetails)
export default FunctionHallSchema