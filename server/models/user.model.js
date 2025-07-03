const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// This is the blueprint for a user
const userSchema = new Schema({
    username: {
        type: String,
        required: true, // A username must be provided
        unique: true,   // Every username must be different
        trim: true      // Removes any extra spaces
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    // We will store a "hashed" password, not the real one, for security.
    passwordHash: {
        type: String,
        required: true
    },
    profile: {
        name: { type: String, required: true },
        degree: { type: String, required: true },
        skills: [String], // An array of strings
        goals: String,
        isAdmin: { type: Boolean, default: false } // Default to not an admin
    }
}, {
    // This automatically adds "createdAt" and "updatedAt" fields
    timestamps: true
});

// This creates the model that we can actually use in our code
const User = mongoose.model('User', userSchema);

module.exports = User; // Export it so other files can use it