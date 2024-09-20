const express = require('express');

const app = express();

// define the port 
const port = 7865;

// start the server and listen on port 7865
app.listen(port, () =>{
    console.log(`API available on localhost port ${port}`);
});

// for the root path, send a welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
})


module.exports = app;