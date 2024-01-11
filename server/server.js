const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5000;

//middlewear
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});