const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const Message = require('./models/Message'); 
const app = express();
const PORT = process.env.PORT || 5000;

// --- DYNAMIC CORS CONFIGURATION ---
const allowedOrigins = [
    "https://orpi-chronicle.vercel.app", // Production
    "http://localhost:5173",             // Local Vite
    "http://localhost:3000"              // Local React
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl)
        if (!origin) return callback(null, true);
        
        // Check if origin is in our list OR is a Vercel preview deployment
        const isAllowed = allowedOrigins.includes(origin) || origin.endsWith(".vercel.app");

        if (isAllowed) {
            callback(null, true);
        } else {
            callback(new Error('CORS blocked: Origin not allowed'));
        }
    },
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true
}));

app.use(express.json());

// --- ROUTES ---

app.get('/api/messages/random', async (req, res) => {
    try {
        const count = await Message.countDocuments();
        if (count === 0) {
            return res.status(404).json({ message: "No scrolls found in the archive." });
        }
        const random = Math.floor(Math.random() * count);
        const item = await Message.findOne().skip(random);
        
        // Manually set header to the requesting origin to bypass strict browser checks
        res.header("Access-Control-Allow-Origin", req.headers.origin);
        res.json(item);
    } catch (err) {
        console.error("API Error:", err.message);
        res.status(500).json({ error: "The ink faded... please try again." });
    }
});

app.get('/', (req, res) => res.send('The Chronicle Server is breathing... ⚡'));

// --- DATABASE & SERVER START ---
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ SUCCESS: Connected to MongoDB Atlas");
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`🚀 SERVER RUNNING ON PORT ${PORT}`);
        });
    })
    .catch(err => {
        console.error("❌ DB CONNECTION ERROR:", err);
        process.exit(1); 
    });