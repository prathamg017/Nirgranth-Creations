// app/models/session.ts
import mongoose, { Schema, model, models } from "mongoose";

const SessionSchema = new Schema(
  {
    token: { type: String, required: true, unique: true }, // JWT token
    user: { type: String, required: true },               // admin email
    valid: { type: Boolean, default: true },              // set false on logout or server restart
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Optional TTL index (auto-delete after X seconds, e.g. 7200s = 2h)
// ⚠️ Note: This only works if you want automatic expiration.
// SessionSchema.index({ createdAt: 1 }, { expireAfterSeconds: 7200 });

const Session = models.Session || model("Session", SessionSchema);
export default Session;
