import mongoose from "mongoose";

const driversSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    index: true,
  },
  lastName: {
    type: String,
    required: true,
    index: true,
  },
  photo: {
    type: String,
    required: true,
    index: true,
  },
  rank: {
    type: String,
    required: true,
    index: true,
  },
  points: {
    type: String,
    required: true,
    index: true,
  },
  team: {
    type: String,
    required: true,
    index: true,
  },
});

export const driversModel = new mongoose.model("driver", driversSchema);
