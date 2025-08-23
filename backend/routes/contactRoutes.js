import express from "express";
import Contact from "../models/contactModel.js"
import { sendMeEmail } from "../utils/emails.js";

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const { Name, email, message } = req.body;

    if (!Name || !email) {
      return res.status(400).json({ error: "Your name or email is required." });
    }

    const newContact = new Contact({ Name, email, message });
    await newContact.save();

    await sendMeEmail({Name, email, message});
    
    res.status(201).json({ message: "Contact form submitted successfully!" });

  } catch (error) {
    console.error("Error in /contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

export default router;