import InputTodo from './component/inputTodo';
import "./App.css";

function App() {

  return (
    <>
      <InputTodo />
      <form>
        <input type="text" className="form-control"></input>
        <button type="submit" className='btn btn-success'>Add Todo</button>
      </form>
    </>
  )
}

export default App
