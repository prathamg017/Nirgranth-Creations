import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    customer: {
      name: String,
      email: String,
      phone: String,
      address: String,
    },
    items: [
      {
        id: String,
        name: String,
        qty: Number,
        price: Number,
      },
    ],
    amount: Number,
    paymentId: String,
    orderId: String,
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
