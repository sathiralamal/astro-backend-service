require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/api");

const app = express();
app.use(bodyParser.json());
app.use("/api/v1", apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Birth Chart Agent running on port ${PORT}`);
});
