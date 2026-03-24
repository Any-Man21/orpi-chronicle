const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Importing the Model
const Message = require('./models/Message'); 

const app = express();

// --- CLOUD PORT CONFIGURATION ---
// Render will inject its own port into process.env.PORT
const PORT = process.env.PORT || 5000;

app.use(cors());
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
        res.json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Health check route for Render
app.get('/', (req, res) => res.send('The Chronicle Server is breathing... ⚡'));

// --- DATABASE & SERVER START ---
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ SUCCESS: Connected to MongoDB Atlas");
        
        // Use '0.0.0.0' to ensure the server is accessible externally on Render
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`🚀 SERVER RUNNING ON PORT ${PORT}`);
        });
    })
    .catch(err => {
        console.error("❌ DB CONNECTION ERROR:", err);
        process.exit(1); // Stop the server if DB fails
    });