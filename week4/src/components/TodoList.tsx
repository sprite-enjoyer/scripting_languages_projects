import { observer } from "mobx-react";
import TodoListStore from "../stores/TodoListStore";
import styles from "../styles/todoList.module.scss";
import TaskAdder from "./TaskAdder";
import TaskList from "./TaskList";

// This is a React component called TodoList that renders the TaskAdder and TaskList components, both receiving
//  the store prop of type TodoListStore. The observer higher-order component from the mobx-react 
//  library is used to automatically re-render when the store changes. A new instance of TodoListStore 
//  is created and used as the store prop for both child components.

const store = new TodoListStore();

const TodoList = () => {
  return (
    <div className={styles["main"]} >
      <TaskAdder store={store} />
      <TaskList store={store} />
    </div>
  );
};


export default observer(TodoList);