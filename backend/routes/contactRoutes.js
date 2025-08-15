import express from "express";
import Contact from "../models/contactModel.js"
import { sendMeEmail } from "../utils/emails.js";

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !email) {
      return res.status(400).json({ error: "First name and email are required." });
    }

    const newContact = new Contact({ firstName, lastName, email, message });
    await newContact.save();

    await sendMeEmail({firstName, lastName, email, message});
    
    res.status(201).json({ message: "Contact form submitted successfully!" });

  } catch (error) {
    console.error("Error in /contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

export default router;