import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, trim: true, unique: true },
    status: { type: Boolean, require: false, default: true },
    saldo: { type: Number, require: true, default: "0" },
    rfid: { type: String, require: true },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("User", userSchema);
