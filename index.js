// Require needed modules.
const express = require('express')

// Initialize the app object.
const app = express()

// Create a homepage route.
app.get('/', function (req, res) {
    // This gets sent to the client
    // (your web browser most likely!)
    res.send('Homepage')
})

// Listen for connections.
app.listen(3000, function () {
    console.log('listening on port 3000')
})

