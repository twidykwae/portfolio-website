import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: String,
  email: { type: String, required: true },
  message: String,
}, { timestamps: true });

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
