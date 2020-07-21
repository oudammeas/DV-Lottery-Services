const express = require('express');

const app = express();

// Set port number for server to listen to
const port = 80

// Tell server to listen to the specified port
app.listen(port, (error) => {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})

// Provide response to get request on '/'
app.get('/', (request, response) => {
    response.render()
})
