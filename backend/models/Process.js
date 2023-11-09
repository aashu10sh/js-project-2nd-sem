import { Schema, model } from "mongoose";

const processSchema = Schema({
  spawned_time: {
    type: Date,
    default: Date.now,
  },
  killed_time: {
    type: Date,
  },
});

const processModel = model("process", processSchema);

export default processModel;
