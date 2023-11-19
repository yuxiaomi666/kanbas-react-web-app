import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
function WorkingWithArrays() {
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("Go to work");
  const [completed, setCompleted] = useState(false);
  const [description, setDescription] = useState("This is description");
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({}); // {id: 1, title: "Go to work"
  const [errorMessage, setErrorMessage] = useState(null);
  <input
    className="form-control"
    value={id}
    onChange={(e) => setTodo({ ...todo, id: e.target.value })}
  />;

  const A5_BASE = process.env.REACT_APP_LAB_BASE;
  const TODOS_API = `${A5_BASE}/todos`;

  const fetchTodosPromise = () => {
    const promise = axios.get(TODOS_API);
    promise.then((response) => {
      setTodos(response.data);
    });
  };

  const createTodo = async () => {
    const response = await axios.get(`${A5_BASE}/todos/create`);
    setTodos(response.data);
  };

  const updateTitle = async (id, title) => {
    try {
      const response = await axios.get(
        `${TODOS_API}/${id}/title/${title}`
      );
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTitleWithPut = async (id, title) => {
    try {
      const response = await axios.put(
        `${A5_BASE}/todos`, 
        {id: id, title: title}
      );
      setTodos(response.data);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const updateCompleteStatus = async (id, completed) => {
    try {
      const response = await axios.get(
        `${TODOS_API}/${id}/completed/${completed}`
      );
      setTodos(response.data);
    } catch (error) {
      console.log(error);
      
    }
  };

  const postTodo = async () => {
    try {
      const response = await axios.post(`${A5_BASE}/todos`, {
        title: title,
      });
      setTodos(response.data);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const fetchTodos = async () => {
    const response = await axios.get(`${A5_BASE}/todos`);
    setTodos(response.data);
  };

  const fetchTodo = async (id) => {
    try {
      const response = await axios.get(`${TODOS_API}/${id}`);
      setTodo(response.data);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data);
    }
  };

  const removeTodo = async (id) => {
    const response = await axios.get(`${TODOS_API}/${id}/delete`);
    setTodos(response.data);
  };

  const deleteTodo = async (id) => {
    const response = await axios.delete(`${TODOS_API}/${id}`);
    setTodos(response.data);
  };



  useEffect(() => {
    // fetchTodosPromise();
    fetchTodos();

  }, []);

  return (
    <div>
      <h1>Working with Arrays</h1>

      <h2>3.3.8.1 Fetch Items(Array)</h2>
      <a href={`${A5_BASE}/todos`} className="btn btn-primary">
        Fetch Todos
      </a>

      <h2>3.3.8.2 Fetch item by id</h2>
      <input
        className="form-control"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <a
        href={`${A5_BASE}/todos/${id}`}
        className="btn btn-primary"
      >
        Fetch Todo {id}
      </a>
      <br></br>
      <h2>3.3.8.3 Fetch completed items</h2>
      <a
        href={`${A5_BASE}/todos/completed`}
        className="btn btn-primary"
      >
        Fetch Completed Todo
      </a>

      <h2>3.3.8.3 Create new todo</h2>
      <a className="btn btn-primary"
        href={`${A5_BASE}/todos/create`}>
        Create Todo "new todo"
      </a>
      <h2>3.3.8.4 Delete todo by Id</h2>
      <input
        className="form-control"
        onChange={(e) => setId(e.target.value)}
      />
      <a className="btn btn-primary"
        href={`${TODOS_API}/${id}/delete`}>
        Delete Todo {id}
      </a>

      <h2>3.3.8.5 Update item title</h2>

      {/* <a
        href={`http://localhost:4000/a5/todos/${id}/title/${title}`}
        className="btn btn-primary"
      >
        Update Todo Title
      </a> */}

      <a
        className="btn btn-primary"
        href={`${TODOS_API}/${id}/title/${title}`}
      >
        Update Todo Title {id} to "{title}"
      </a>


      <input
        className="form-control"
        onChange={(e) => setId(e.target.value)}
      />
      <input
        className="form-control"
        onChange={(e) => setTitle(e.target.value)}
      />
      <h2>3.3.7 Update item completed status</h2>
      <a
        className="btn btn-primary"
        href={`${TODOS_API}/${id}/completed/${completed}`}
      >
        Update Todo {id}'s completed status
      </a>
      <input
        className="form-control"
        onChange={(e) => setId(e.target.value)}
      />
      <input type="checkbox" onClick={(e) => setCompleted(e.target.checked)} />
      <h2>3.3.7 Update item description</h2>
      <a
        className="btn btn-primary"
        href={`${TODOS_API}/${id}/description/${description}`}
      >
        Update Todo {id}'s description
      </a>
      <input
        className="form-control"
        onChange={(e) => setId(e.target.value)}
      />
      <input className="form-control"
        onChange={(e) => setDescription(e.target.value)} />

      <h1>3.4.10</h1>
      <h4>3.4.10.6</h4>
      <button className="btn btn-primary" onClick={createTodo}>
        Create Todo "new todo"
      </button>
      <div class="form-group row">
        <label className="col-sm-3 col-form-label">Write updated content here</label>
        <div className="col-sm-9">
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <h4>Display todos 3.4.10.2 + 3.4.10.8 + 3.4.10.4 + 3.4.10.5</h4>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            <button
              className="btn btn-warning float-end"
              onClick={() => updateTitle(todo.id, title)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger float-end"
              onClick={() => removeTodo(todo.id)}
            >
              Delete
            </button>
            {todo.title}
            <hr />
            {todo.id}
          </li>
        ))}
      </ul>
      <h4>3.4.10.7 + 3.4.10.3 Fetch item by id</h4>
      <h5>test 3.5 handling error here, like id = 100</h5>
      <input
        className="form-control"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button className="btn btn-primary"
        onClick={() => fetchTodo(id)}
      >
        Fetch Todo {id}
      </button>
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}
      <ul>
        <li>todo.id: {todo.id}</li>
        <li>todo.title: {todo.title}</li>
        <li>todo.completed: {todo.completed}</li>
        <li>todo.description: {todo.description}</li>
      </ul>

      <h1>3.5.5 </h1>
      <input
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="btn btn-primary" onClick={postTodo}>
        Post Todo with title "{title}"
      </button>
      <div class="form-group row">
        <label className="col-sm-3 col-form-label">Write updated content here</label>
        <div className="col-sm-9">
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            <button
              className="btn btn-warning float-end"
              onClick={() => updateTitleWithPut(todo.id, title)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger float-end"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
            {todo.title}
            <hr />
            {todo.id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkingWithArrays;
