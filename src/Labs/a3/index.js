import JavaScript from "./JavaScript";
import PathParameters from './PathParameters';
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import { useSelector } from "react-redux";
import "./test.css";
import Har from "./exam16";

function Assignment3() {
    const { todos } = useSelector((state) => state.todosReducer);
    return (
        <div>
            <h1 title="rew" class="tre">I'm white on blue</h1>
            <Har />
            <h2>Assignment 3</h2>
            <ul className="list-group">
                {todos.map((todo) => (
                    <li className="list-group-item" key={todo.id}>
                        {todo.title}
                    </li>
                ))} 
            </ul>
            <TodoList />
            <TodoItem />
            <ConditionalOutput />
            <Styles />
            <Classes />
            <PathParameters />
            <JavaScript />
        </div>);
}
export default Assignment3;