const express = require("express");
const router = express.Router();
const pool = require("./db")

//create a todo

router.post("/todos", async (req, res) => {
    try {
      const { description, completed } = req.body;
  
      // If 'completed' is not provided in the request body, default it to false
      const newTodo = await pool.query("INSERT INTO todo (description, completed) VALUES($1, COALESCE($2, false)) RETURNING *", [description, completed]);
  
      res.json(newTodo.rows[0]);
  
    } catch (err) {
      console.error(err.message);
    }
  });
  
  
  //get all todos
  
  router.get("/todos", async (req, res) => {
    try {
      const allTodos = await pool.query("SELECT * FROM todo");
  
      res.json(allTodos.rows)
  
    } catch (error) {
      console.error(err.message);
    }
  });
  
  //get a single todo
  router.get("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
  
      res.json(todo.rows[0]);
      
    } catch (error) {
      console.error(err.message);
    }
  });
  
  //update a todo
  router.put("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { completed } = req.body; // Use 'completed' instead of 'description'
      
      const updateTodo = await pool.query(
        "UPDATE todo SET completed = $1 WHERE todo_id = $2 RETURNING *",
        [completed, id]
      );
  
      res.json(updateTodo.rows[0]);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  
  //delete a todo
  router.delete("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
  
      res.json({ message: `Todo deleted.` });
      
    } catch (error) {
      console.error(err.message);
    }
  });
  
  module.exports = router;