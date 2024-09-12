import mongoose from "mongoose";


const bookingDate = new mongoose.Schema({
    Date:{type:String},
    FunctionHallName:{type:String},
    PhoneNumber:{type:String},
    Request:{type:String},
    NameofTheUserBooked:{type:String},
    TypeOfEvent:{type:String},
    SupervisorId : {type:String},
    NumberOfGuests : {type:String}
})


const BookingDateSchema = mongoose.model("booking date",bookingDate)
export default BookingDateSchema



