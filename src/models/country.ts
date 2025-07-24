import { required } from "joi";
import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
  countries: [
    {
      Countryname: { type: String, required: true },
      code: { type: String, required: true, unique: true },
    },
  ],
});

const country = mongoose.model("Country", countrySchema);

export { country };
