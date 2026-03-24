const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Get one random message from the collection
router.get('/random', async (req, res) => {
    try {
        const count = await Message.countDocuments();
        const random = Math.floor(Math.random() * count);
        const item = await Message.findOne().skip(random);
        res.json(item);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;