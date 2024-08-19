import express from 'express';
import { Consultation } from './models/consultationModel'; // Import your Consultation model

const router = express.Router();

router.post('/api/checkIsDone', async (req, res) => {
  const { email } = req.body;
  try {
    const consultation = await Consultation.findOne({ email: email });

    if (!consultation) {
      return res.status(404).json({ message: "Consultation not found" });
    }

    res.json({ isDone: consultation.isDone });
  } catch (error) {
    console.error("Error checking isDone status:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
