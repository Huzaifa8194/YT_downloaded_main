const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());

app.listen(4000, () => {
    console.log('Server started at port 4000');
});

app.get('/download', (req, res) => {
    var URL = req.query.URL;
    var quality = req.query.quality || 'highest'; // Default to highest quality if not specified
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    
    // Check if quality is valid (highest or lowest)
    if (quality === 'highest' || quality === 'lowest') {
        ytdl(URL, { quality: quality === 'highest' ? 'highest' : 'lowest' }).pipe(res);
    } else {
        res.status(400).send("Invalid quality option!");
    }
});