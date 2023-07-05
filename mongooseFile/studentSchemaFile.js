const mongoose = require("mongoose");
const addressSChema = new mongoose.Schema({
  city: String,
  street: String,
});
const studentSchema = new mongoose.Schema(
  {
    name: String,
    age: { type: Number, min: 1, max: 100, required: true },
    isMarried: Boolean,
    email: {
      type: String,
      minLength: 6,
      maxLength: 33,
      required: true,
      lowercase: true,
    },
    createdAt: { type: Date, default: () => new Date(), immutable: true },
    updatedAt: Date,
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSChema,
  },
  { versionKey: false }
);
const studentModel = mongoose.model("student", studentSchema); // here student is name of collection in mongodb
module.exports = studentModel;
