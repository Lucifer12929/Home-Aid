import mongoose from "mongoose";
import TRIVdetails from "../models/trivDetails.js";

export const getTRIV = async (req, res) => {
  try {
    const trivDetails = await TRIVdetails.find();
    res.status(200).json(trivDetails);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createTRIV = async (req, res) => {
  const TRIV = req.body;

  const newTRIV = new TRIVdetails(TRIV);
  try {
    await newTRIV.save();

    res.status(201).json(newTRIV);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTRIV = async (req, res) => {
  const { id: id } = req.params;
  const TRIV = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No TRIV with that id");
  }

  const updatedTRIV = await TRIVdetails.findByIdAndUpdate(id, { ...TRIV, id });
  res.json(updateTRIV);
};

export const deleteTRIV = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No TRIV with that id");
  }

  await TRIVdetails.findByIdAndRemove(id);

  res.json({ message: "TRIV deleted successfully" });
};
