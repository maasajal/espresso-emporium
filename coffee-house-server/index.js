const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3333;

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Coffee House for Coffee Lovers");
});

app.listen(port, () => {
  console.log(`Espresso Emporium server is running on port ${port}`);
});
