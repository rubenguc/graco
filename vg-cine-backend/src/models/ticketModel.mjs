import moongose from "mongoose";
const { Schema, model } = moongose;

const ticketSchema = new Schema({
  ticketCount: Number,
  paymentMethod: String,
  id: String,
  referenceNumber: String,
  movieTitle: String,
  date: {
    type: Date,
    default: () => {
      return new Date();
    },
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const ticketModel = model("Date", ticketSchema);
