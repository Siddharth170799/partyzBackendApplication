import express from "express"
import UserDetails from "../Schema/BookedUserDetailsSchema.js"




const UserDetailsRoute = express.Router()


UserDetailsRoute.post("/postUserDetails",async(req,res)=>{
    const {name,dateOfBooking,typeOfEvent,numberOfGuests,userAddress,phoneNumber,email} = req.body
    console.log(name,dateOfBooking,typeOfEvent,numberOfGuests,userAddress)

    const userDetails = new UserDetails({
        Name:name,
        DateOfBooking:dateOfBooking,
        EventType:typeOfEvent,
        NumberOfGuests:numberOfGuests,
        Address:userAddress,
        PhoneNumber:phoneNumber,
        Email:email

    })

    const postUserDetails = await userDetails.save()
    res.send({message:"userdetails posted successfully",data:postUserDetails,status:200})
})

export default UserDetailsRoute