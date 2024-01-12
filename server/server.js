require("dotenv").config();

const express = require("express");
const cors = require("cors");
const pool = require("./db"); //pool allows us to run queries with Postgres

const app = express();


const PORT = process.env.PORT || 5000;

//middlewear
app.use(cors());
app.use(express.json()); //allows to parse to JSON data // req.body

//create ROUTES

//create a todo

app.post("/todos", async (req, res) => {
    try {
      //console.log(req.body);
      const { description } = req.body;
      const newTodo = await pool.query(
        "INSERT INTO todo (description) VALUES ($1)",
        [description]
      );
      res.json(newTodo);
    } catch (err) {
      console.error(err.message);
    }
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});