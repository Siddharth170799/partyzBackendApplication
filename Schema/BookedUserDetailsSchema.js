import mongoose from "mongoose";


const userDetails = new mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    DateOfBooking:{type:String},
    EventType:{type:String},
    NumberOfGuests:{type:String},
    Address:{type:String},
    PhoneNumber:{type:String}
})


const UserDetails = mongoose.model("user details who booked hall",userDetails)
export default UserDetails