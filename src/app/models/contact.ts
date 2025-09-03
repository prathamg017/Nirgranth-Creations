import mongoose, { Schema } from "mongoose";

// ✅ Define schema
const ContactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

// ✅ Avoid model overwrite error & force collection name = "contacts"
const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema, "contacts");

export default Contact;
