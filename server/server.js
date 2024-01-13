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
        "INSERT INTO todo (description) VALUES($1) RETURNING *",
        [description]
      );
      res.json(newTodo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

//get all todos

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows)
  } catch (error) {
    console.error(err.message);
  }
});

//get a single todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
    res.json(todo.rows[0]);
    
  } catch (error) {
    console.error(err.message);
  }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});