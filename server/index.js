const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Importing the Model
const Message = require('./models/Message'); 

const app = express();

// --- CLOUD PORT CONFIGURATION ---
const PORT = process.env.PORT || 5000;

// --- CORS CONFIGURATION (CRITICAL FOR VERCEL) ---
app.use(cors({
    origin: [
        "https://orpi-chronicle.vercel.app", // Your live frontend
        "http://localhost:5173",             // Your local development
        "http://localhost:3000"
    ],
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true
}));

app.use(express.json());

// --- ROUTES ---

// Random Message Route
app.get('/api/messages/random', async (req, res) => {
    try {
        const count = await Message.countDocuments();
        if (count === 0) {
            return res.status(404).json({ message: "No scrolls found in the archive." });
        }
        const random = Math.floor(Math.random() * count);
        const item = await Message.findOne().skip(random);
        
        // Add a header as a backup to ensure the browser allows the data
        res.header("Access-Control-Allow-Origin", "https://orpi-chronicle.vercel.app");
        res.json(item);
    } catch (err) {
        console.error("API Error:", err.message);
        res.status(500).json({ error: "The ink faded... please try again." });
    }
});

// Health check route for Render
app.get('/', (req, res) => res.send('The Chronicle Server is breathing... ⚡'));

// --- DATABASE & SERVER START ---
// Set strictQuery to suppress deprecation warnings
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ SUCCESS: Connected to MongoDB Atlas");
        
        // Listen on all interfaces (0.0.0.0) for Render
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`🚀 SERVER RUNNING ON PORT ${PORT}`);
        });
    })
    .catch(err => {
        console.error("❌ DB CONNECTION ERROR:", err);
        process.exit(1); 
    });