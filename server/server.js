// 1. IMPORT TOOLS
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// 2. INITIALIZE APP
const app = express();
const PORT = 5000; // The "door number" for our server

// 3. MIDDLEWARE (Rules for the server)
app.use(cors()); // Allows our front-end to talk to our back-end
app.use(express.json()); // Allows the server to understand JSON data

// 4. DATABASE CONNECTION
// Replace this with the real connection string you saved in Phase 1!
const MONGODB_URI ="mongodb+srv://trendsuser:trendswithtechnology@cluster0.joizqaz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB connected successfully.'))
    .catch(err => console.error('MongoDB connection error:', err));

// 5. API ROUTES (We will add these later)
// A test route to make sure our server is alive
app.get('/', (req, res) => {
    res.send('Trends With Technology API is alive!');
});
// Import the user routes we just created
const userRoutes = require('./routes/user.routes');
// Tell the server: "Any request starting with /api/users should use the rules from userRoutes"
app.use('/api/users', userRoutes);

// 6. START THE SERVER
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});