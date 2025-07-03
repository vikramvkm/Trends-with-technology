const router = require('express').Router();
const User = require('../models/user.model'); // Import the User blueprint
const simpleHash = (str) => { let hash = 0; for (let i = 0; i < str.length; i++) { const char = str.charCodeAt(i); hash = ((hash << 5) - hash) + char; hash |= 0; } return hash.toString(); };

// This handles POST requests to the URL: /api/users/register
router.post('/register', async (req, res) => {
    try {
        // 1. Get the data from the front-end request
        const { username, email, password, name, degree } = req.body;

        // 2. Check if a user with that email or username already exists
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already exists.' });
        }

        // 3. Create a new user instance based on our blueprint
        const newUser = new User({
            username,
            email,
            passwordHash: simpleHash(password), // Hash the password
            profile: {
                name,
                degree
            }
        });

        // 4. Save the new user to the database
        const savedUser = await newUser.save();

        // 5. Send a success response back to the front-end
        res.status(201).json({ message: 'User registered successfully!', userId: savedUser._id });

    } catch (error) {
        // If anything goes wrong, send an error response
        res.status(500).json({ message: 'Server error during registration.', error: error.message });
    }
});

// We will add the /login route here later

module.exports = router; // Export all the rules we defined