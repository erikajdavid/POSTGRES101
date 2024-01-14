import React, { useState, useEffect } from "react";

const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    const getAllTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos", {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            };

            const data = await response.json();
            setTodos(data);
            console.log(data);
            
        } catch (err) {
            console.error(err.message);
        }   
    }

    useEffect(() => {
        getAllTodos();
    },);

    return (
        <>
            <ul>
                {todos.map((todo) => {
                    return (
                        <>
                            <li key={todo.todo_id}>
                                {todo.description}
                                <button>edit</button>
                                <button>delete</button>
                            </li>
                        </>
                    )
                })}
            </ul>
        </>
    );

}

export default ListTodos;