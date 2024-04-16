const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
const playlistFilePath = path.join(__dirname, 'data', 'package.json');


app.get('/api/playlist', (req, res) => {
    fs.readFile(playlistFilePath, 'utf8',  (err, data) => {
        if (err) {
            console.error('Error readying playlist data:', err);
            res.status(500).send('Error parsing playlist data.');
            return;
        }
        try {
            const playlist = JSON.parse(data)
            res.json(playlist);
        } catch (parseError) {
            console.error('Error parsing playlist data:', parseError);
            res.status(500).send('Error parsing playlist data.');
        }
    });
});


app.post('/api/scores', (req, res) => {
    fs.readFile(playlistFilePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading playlist data.');
            return;
        }
        let playlist;
        try {
            playlist = JSON.parse(data);
        } catch (parseError) {
            console.error('Error parsing playlist data', parseError);
            res.status(500).send('Errorparsing playlist data.');
            return;
        }
        playlist.push(req.body);


        fs.writeFile(playlistFilePath, JSON.stringify(playlist, null, 2), (writeErr) => {
            if(writeErr) {
                console.error('Error saving new playlist:', writeErr);
                res.status(500).send('Error saving new playlist.');
                return;
            }
            res.status(201).send('Playlist added.');
        });
    });
});

app.listen(PORT,() => {
    console.log(`server is running on http:localhost: ${PORT}`);
});