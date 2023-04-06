import styles from "../styles/task.module.scss";
import { observer } from "mobx-react";
import TodoListStore, { Task } from "../stores/TodoListStore";
import { ChangeEventHandler, useMemo } from "react";


// This is a TypeScript module that exports a React component called Task. 
// The component receives two props: task of type Task and store of type TodoListStore.
// The component uses the observer higher-order component from the 
// mobx-react library to automatically re-render when observable data in the store changes.
// The component renders a single task item in a todo list. 
// The item consists of an input checkbox, a task name, and a delete button. 
// The textStyle variable is a memoized object that contains a textDecoration property set to "line-through" 
// if the task is done and "none" otherwise. The checkboxChangeHandler is a callback function that calls the 
// setTaskDone method of the store when the checkbox input is changed. The setTaskDone method updates the done property 
// of the task with the given id to the new value. The onClick callback of the delete button calls the removeTask method 
// of the store with the id of the task to remove it from the list.
// Overall, this component is part of a larger todo list application that uses the MobX library for state management. 
// The Task component is responsible for rendering a single item in the todo list, allowing the user to mark 
// the task as done or delete it from the list.


export interface TaskProps {
  task: Task,
  store: TodoListStore,
}

const Task = ({ task, store }: TaskProps) => {

  const textStyle = useMemo(() => { return { textDecoration: task.done ? "line-through" : "none" } }, [task.done]);

  const checkboxChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    store.setTaskDone(task.id, e.target.checked);
  };

  return (
    <>
      <input className={styles["input"]} onChange={checkboxChangeHandler} type="checkbox" />
      <span className={styles["name"]} style={textStyle} >
        {task.name}
      </span>
      <button className={styles["btn"]} onClick={() => store.removeTask(task.id)}>
        <span style={textStyle}>
          Delete
        </span>
      </button>
    </>
  );
};

export default observer(Task);