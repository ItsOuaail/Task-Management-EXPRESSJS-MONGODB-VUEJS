const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const nodemailer = require('nodemailer');


// Register a new user and send confirmation email
router.post('/register', async (req, res) => {
    try {
        const { username, password, email, numero } = req.body;
        const user = new User({ username, password, email, numero });
        
        // Save user to the database
        await user.save();

        // Generate a JWT token for email confirmation
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '3h' });
        
        const confirmationUrl = `http://localhost:5000/api/auth/confirm/${token}`;

        // Create a Nodemailer transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Confirm Your Registration',
            text: `Please confirm your registration by clicking the following link: ${confirmationUrl}`,
            html: `<p>Please confirm your registration by clicking the following link: <a href="${confirmationUrl}">${confirmationUrl}</a></p>`
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(201).send({ message: 'User registered successfully. Please check your email to confirm your registration.' });
    } catch (err) {
        res.status(400).send({ error: 'Failed to register user', details: err.message });
    }
});
 
// Confirm email route
router.get('/confirm/:token', async (req, res) => {
    try {
        const { token } = req.params;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(400).send({ error: 'Invalid token or user does not exist' });
        }

        // Confirm the user's registration
        user.isConfirmed = true;
        await user.save();

        res.status(200).send({ message: 'User confirmed successfully' });
    } catch (err) {
        res.status(400).send({ error: 'Failed to confirm user', details: err.message });
    }
});


router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(404).send('User not found');

        if (!user.isConfirmed) return res.status(400).send({ error: 'User not confirmed' });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send('Invalid credentials');

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '3h' });
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).send('Server error');
    }
});




module.exports = router;