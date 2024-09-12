import express from "express";
import FunctionHallSchema from "../Schema/FunctionHallSchema.js";
import FunctionHalls from "../Data/FunctionHallsList.js";

const FunctionHallsRoute = express.Router();

FunctionHallsRoute.post("/postFunctionHalls", async (req, res) => {
  const HallDetails = await FunctionHallSchema.insertMany(FunctionHalls);

  res.send({
    message: "details posted successfully",
    data: HallDetails,
    status: 200,
  });
});


FunctionHallsRoute.get("/getFunctionHalls",async(req,res)=>{
    const FunctionHalls = await FunctionHallSchema.find()
    res.send(FunctionHalls)
})
export default FunctionHallsRoute;
