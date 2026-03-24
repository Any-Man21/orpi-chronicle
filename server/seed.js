const mongoose = require('mongoose');
const Message = require('./models/Message');
const fs = require('fs');
require('dotenv').config();

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to the Vault...");

        const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

        await Message.deleteMany(); 
        await Message.insertMany(data);

        console.log(`Success! ${data.length} scrolls added to MongoDB Atlas. 🌱`);
        process.exit(); // This closes the script after success
    } catch (err) {
        console.error("The ink spilled! Error:", err);
        process.exit(1);
    }
};

seedDatabase();