import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// POST: Book an appointment
router.post("/", async (req, res) => {
  try {
    const { name, email, time } = req.body;
    const booking = new Booking({ name, email, time });
    await booking.save();
    res.status(201).json({ message: "Booking successful!" });
  } catch (error) {
    res.status(500).json({ error: "Booking failed" });
  }
});

// GET: Get all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Error fetching bookings" });
  }
});

export default router;
