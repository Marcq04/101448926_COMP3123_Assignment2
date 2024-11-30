const express = require('express');
const mongoose = require('mongoose');
const employeeRoutes = require('./routes/employeeRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/employees', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('Error connecting to MongoDB:', error);
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
    res.status(200);
});

app.use('/employees', employeeRoutes);
app.use('/users', userRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})