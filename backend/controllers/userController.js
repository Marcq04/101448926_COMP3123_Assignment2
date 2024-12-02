const User = require("../models/user");

exports.signupUser = async (req, res) => {
    const { username, email, password } = req.body;
    
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
        return res.status(400).json({ message: "Username or email already exists" });
    }

    const user = new User(req.body);
    try {
        const newUser = await user.save();
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(400).json({ message: error.message });
    }
};




exports.loginUser = async (req, res) => {
    const { email, password } = req.body; 
    try {
        const user = await User.findOne({ email }); 
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid password" });
        }
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.logoutUser = (req, res) => {
    req.session.destroy();
    res.status(200).json({ message: "Logged out successfully" });
};

