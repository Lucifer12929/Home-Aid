import mongoose from "mongoose";

const trivSchema = mongoose.Schema({
  name: String,
  phoneNo: Number,
  email: String,
  userName: String,
  passWord: String,
  latitude: Number,
  longitude: Number,
  distance: Number,
  city: String,
  address: String,
  occupation: String,
});

const TRIVdetails = mongoose.model("TRIVdetails", trivSchema);

export default TRIVdetails;
