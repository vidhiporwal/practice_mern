const express = require("express");
const connectDb = require("./config/connectDb");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT 

app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
