const express = require('express');
const path = require('path');
const fs = require('fs')

const app = express();
const menusFile = fs.readFileSync(path.join(__dirname, './resources/menus.json'))

app.use(express.static(__dirname))

app.get('', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

// rest end point to get menu items (Homework 9.4)
app.get('/menus', (req, res) => {
        return res.status(200).send(JSON.parse(menusFile))
    }
)

const port = 3000

// bind to port
app.listen(port, () => {
    console.log(`Menu app is running on port ${port}`)
})