const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

const port = 3000

// bind to port
app.listen(port, () => {
    console.log(`Menu app is running on port ${port}`)
})