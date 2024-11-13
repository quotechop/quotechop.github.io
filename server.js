const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Serve static files (HTML, CSS, etc.)
app.use(express.static('public'));

// Handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
