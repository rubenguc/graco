import moongose from "mongoose";
const { Schema, model } = moongose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  id: String,
  password: String,
  address: String,
  birthday: String,
});

export const userModel = model("User", userSchema);
