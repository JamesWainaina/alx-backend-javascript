const express = require("express");
const app = express();
const port = 7865;

app.get("/", (req, res) => {
  res.send("Welcome to the payment system" ); // Example JSON response
});

app.get("/cart/:id(\\d+)", (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

// Start server only if the file is run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
  });
}

module.exports = app;
