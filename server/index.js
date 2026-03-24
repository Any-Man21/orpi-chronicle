const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// We are importing the Model directly to avoid the folder error
const Message = require('./models/Message'); 

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// --- ROUTES (MOVING THEM HERE TO FIX THE ERROR) ---
app.get('/api/messages/random', async (req, res) => {
    try {
        const count = await Message.countDocuments();
        const random = Math.floor(Math.random() * count);
        const item = await Message.findOne().skip(random);
        res.json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/', (req, res) => res.send('Server is breathing...'));

// --- DATABASE ---
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ SUCCESS: Connected to MongoDB Atlas");
        app.listen(PORT, () => console.log(`🚀 SERVER RUNNING ON PORT ${PORT}`));
    })
    .catch(err => console.log("❌ DB CONNECTION ERROR:", err));