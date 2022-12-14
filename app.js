// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// Accessing the path module
const path = require("path");

// routes
const books = require('./routes/api/books');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));
app.use(express.static('my-app/build'))

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

// Step 1:

// Step 2:
// app.get("*", function (request, response) {
//   response.sendFile(path.resolve(__dirname, "./my-app/build", "index.html"));
// });