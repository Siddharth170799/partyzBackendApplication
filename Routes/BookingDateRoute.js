import express from "express";
import BookingDateSchema from "../Schema/DateSchema.js";
import { message } from "antd";

const BookingDateRoute = express.Router();

BookingDateRoute.post("/postBookingDate", async (req, res) => {
  const {
    bookingDate,
    functionHallName,
    request,
    phoneNumber,
    nameOfThePersonBooked,
    typeOfEvent,
    SupervisorId,
    numberOfGuests,
  } = req.body;
  console.log(bookingDate, functionHallName, "hello");
  const details = new BookingDateSchema({
    Date: bookingDate,
    FunctionHallName: functionHallName,
    PhoneNumber: phoneNumber,
    Request: request,
    NameofTheUserBooked: nameOfThePersonBooked,
    TypeOfEvent: typeOfEvent,
    SupervisorId: SupervisorId,
    NumberOfGuests: numberOfGuests,
  });

  const bookingDateDetails = await details.save();
  res.send({
    message: "booking data posted successfully",
    data: bookingDateDetails,
    status: 200,
  });
});

BookingDateRoute.get("/getBookingDateDetails", async (req, res) => {
  const details = await BookingDateSchema.find();
  res.send(details);
});

const supervisorIdStore = new Map();

BookingDateRoute.post("/postSupervisorUserId", async (req, res) => {
  const { supervisorId } = req.body;

  supervisorIdStore.set("current", supervisorId);
  const details = await BookingDateSchema.find({ SupervisorId: supervisorId });
  res.send({ message: "Supervisor ID processed", status: 200 });
});

BookingDateRoute.get(
  "/getFunctionHallsBySupervisorUserId",
  async (req, res) => {
    const supervisorId = supervisorIdStore.get("current");
    console.log(`Retrieved supervisorId from store: ${supervisorId}`);

    const details1 = await BookingDateSchema.find({
      SupervisorId: supervisorId,
    });
    console.log("Function halls found:", details1);
    res.send({
      message: "details sent successfully",
      data: details1,
      status: 200,
    });
  }
);

BookingDateRoute.put("/updateRequestById/:itemId", async (req, res) => {
  const { itemId } = req.params;

  const { message } = req.body;

  const details = await BookingDateSchema.findByIdAndUpdate(itemId, {
    Request: message,
  });
  res.send({ message: "updated", data: details, status: 200 });
});

BookingDateRoute.post("/userPhoneNumber", async (req, res) => {
  const { userPhoneNumber } = req.body;

  console.log(userPhoneNumber, "ll");
});

BookingDateRoute.get("/getAllUserBookings", async (req, res) => {
  const details = await BookingDateSchema.find();
  res.send(details);
});

export default BookingDateRoute;
