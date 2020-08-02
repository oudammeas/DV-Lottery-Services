const express = require('express');

const path = require('path');

const app = express();

// Set port number for server to listen to
const port = 3000

// Tell server to listen to the specified port
app.listen(port, (error) => {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})

// Use middleware to serve static files (images/css)

app.use(express.static(path.join(__dirname, '../public')));

// // Provide response to get request on '/'
// app.get('/', (request, response) => {
//     response.sendFile(path.join(__dirname, '../public/index.html'))
// })
