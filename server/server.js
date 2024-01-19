require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

//middlewear
app.use(cors());
app.use(express.json()); //allows to parse to JSON data // req.body

//create ROUTES
app.use("/", require("./routes"));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});