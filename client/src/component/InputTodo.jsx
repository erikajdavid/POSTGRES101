import React, { useState } from "react";

const InputTodo = () => {

    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body),
            });

            console.log(response);

            //clean input

            setDescription("");
            
        } catch (err) {
            console.error(err.message);        }

    }
    return (
        <>
            <h1>Pern Todo List</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo"></label>
                <input 
                    type="text" 
                    id="description" 
                    name="description" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter a todo..." 
                    required>
                </input>
                <button type="submit">+</button>
            </form>
        </>
    );
}

export default InputTodo;