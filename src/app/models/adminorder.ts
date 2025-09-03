import mongoose, { Schema, model, models } from "mongoose";

const OrderSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
    items: [{ product: String, quantity: Number, price: Number }],
    totalAmount: { type: Number },
    status: { type: String, default: "Pending" },
  },
  { timestamps: true } // ✅ adds createdAt + updatedAt
);

const Order = models.Order || model("Order", OrderSchema);
export default Order;
